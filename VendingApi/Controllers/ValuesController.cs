using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Newtonsoft.Json;
using System.Data.SqlClient;
using System.Data;
using VendingApi.Models;
using System.Configuration;
using System.Web.Http.Cors;

namespace VendingApi.Controllers
{
    [EnableCors(origins: "http://localhost:49972", headers:"*", methods:"*")]
    public class ValuesController : ApiController
    {
        // GET api/values
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }

        [HttpPost]
        [Route("api/vending/buyProduct")]
        public HttpResponseMessage BuyProduct([FromBody] VendingRequest VendingReq)
        {
            try
            {
                string data = string.Empty;
                HttpResponseMessage response = new HttpResponseMessage();
                ApiResponse valRes = new ApiResponse();
                using (SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["conStr"].ConnectionString))
                {

                    using (SqlCommand cmd = new SqlCommand("usp_buyProduct", conn))
                    {

                        SqlDataAdapter adapt = new SqlDataAdapter(cmd);
                        adapt.SelectCommand.CommandType = CommandType.StoredProcedure;
                        adapt.SelectCommand.Parameters.Add(new SqlParameter("@productNm", SqlDbType.VarChar, 100));
                        adapt.SelectCommand.Parameters["@productNm"].Value = VendingReq.ProductName;
                        adapt.SelectCommand.Parameters.Add(new SqlParameter("@actualAmt", SqlDbType.VarChar, 50));
                        adapt.SelectCommand.Parameters["@actualAmt"].Value = VendingReq.ActualAmount;
                        conn.Open();
                        using (SqlDataReader dr = cmd.ExecuteReader())
                        {
                            while (dr.Read())
                            {
                                if (dr["STATUS"].Equals("1"))
                                {
                                    valRes.ProductName = dr["ProductName"].ToString();
                                    valRes.Change = Math.Round(Convert.ToDouble(dr["CHANGE"]),2).ToString();
                                    valRes.IsValidTransaction = true;
                                    valRes.IsAvailable = true;
                                    valRes.Message = "TRANSACTION SUCCESSFUL, PLEASE TAKE YOUR PRODUCT";
                                    data = Newtonsoft.Json.JsonConvert.SerializeObject(valRes);
                                    response = Request.CreateResponse<ApiResponse>(HttpStatusCode.OK, valRes, "application/json");
                                }
                                else
                                {
                                    valRes.Message = dr["Message"].ToString();
                                    valRes.ProductName = string.Empty;
                                    valRes.IsValidTransaction = false;
                                    valRes.Change = Math.Round(Convert.ToDouble(dr["CHANGE"]), 2).ToString();
                                    data = Newtonsoft.Json.JsonConvert.SerializeObject(valRes);
                                    response = Request.CreateResponse<ApiResponse>(HttpStatusCode.OK, valRes, "application/json");
                                }
                            }
                        }
                        conn.Close();

                        return response;

                    }
                }
            }
            catch(Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError,new ApiResponse { Change = "-1", Message = ex.Message, IsAvailable = false, IsValidTransaction = false,ProductName=string.Empty },"application/json");
            }
        }
    }
}
