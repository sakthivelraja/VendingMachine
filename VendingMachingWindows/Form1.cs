using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using System.Web.Script.Serialization;
using System.Windows.Forms;
using Newtonsoft.Json;

namespace VendingMachingWindows
{
    public partial class Form1 : Form
    {
        public float amount = 0;
        public Form1()
        {
            InitializeComponent();
        }

        private void btnNickels_Click(object sender, EventArgs e)
        {
            amount += 5;
            lblAmount.Text = "$" + (amount/100).ToString();
        }

        private void btnDime_Click(object sender, EventArgs e)
        {
            amount += 10;
            lblAmount.Text = "$" + (amount /100).ToString();
        }

        private void btnQuarter_Click(object sender, EventArgs e)
        {
            amount += 25;
            lblAmount.Text = "$" + (amount /100).ToString();
        }

        private async void BtnVendProduct_Click(object sender, EventArgs e)
        {
            Request req = new Request();

           if ( rdoBtnCola.Checked == true)
            {
                req.productName = "Cola";
            }
           else if (rdoBtnCandy.Checked == true)
            {
                req.productName = "Candy";
            }
           else if(rdoButtonChips.Checked == true)
            {
                req.productName = "Chips";
            }

            req.actualAmount = amount/100;

          
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri("http://localhost:50258/");
                client.DefaultRequestHeaders.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

                var requestUri = new Uri("api/vending/buyProduct",UriKind.Relative);
                var content = new StringContent(Newtonsoft.Json.JsonConvert.SerializeObject(req),Encoding.UTF8,"application/json");
                var response =  await client.PostAsync(requestUri, content);
                var result = JsonConvert.DeserializeObject<Response>( await response.Content.ReadAsStringAsync());

                //var result = JsonConvert.DeserializeObject<Response>(response.Content.ReadAsStringAsync().Result);

            

                if(result.isValidTransaction && result.isAvailable)
                {
                    lblStatus.Text = result.message;
                    lblChgVal.Text = "$" + result.change.ToString();
                    lblAmount.Text = "$0";
                    amount = 0;
                }
                else
                {

                    lblStatus.Text = result.message;
                    lblChgVal.Text = result.change.ToString();
                    lblAmount.Text = "$0";
                    amount = 0;
                }
               
              
            }

            


        }
    }
}
