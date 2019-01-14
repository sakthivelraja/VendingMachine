namespace VendingMachingWindows
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.panel1 = new System.Windows.Forms.Panel();
            this.rdoBtnCandy = new System.Windows.Forms.RadioButton();
            this.rdoButtonChips = new System.Windows.Forms.RadioButton();
            this.rdoBtnCola = new System.Windows.Forms.RadioButton();
            this.lblSelect = new System.Windows.Forms.Label();
            this.BtnVendProduct = new System.Windows.Forms.Button();
            this.panel2 = new System.Windows.Forms.Panel();
            this.btnQuarter = new System.Windows.Forms.Button();
            this.btnDime = new System.Windows.Forms.Button();
            this.btnNickels = new System.Windows.Forms.Button();
            this.lblPayment = new System.Windows.Forms.Label();
            this.lblDenomination = new System.Windows.Forms.Label();
            this.panel3 = new System.Windows.Forms.Panel();
            this.lblAmount = new System.Windows.Forms.Label();
            this.lblStatus = new System.Windows.Forms.Label();
            this.panel4 = new System.Windows.Forms.Panel();
            this.lblStatusHeader = new System.Windows.Forms.Label();
            this.panel5 = new System.Windows.Forms.Panel();
            this.lblChgVal = new System.Windows.Forms.Label();
            this.lblChange = new System.Windows.Forms.Label();
            this.panel1.SuspendLayout();
            this.panel2.SuspendLayout();
            this.panel3.SuspendLayout();
            this.panel4.SuspendLayout();
            this.panel5.SuspendLayout();
            this.SuspendLayout();
            // 
            // panel1
            // 
            this.panel1.Controls.Add(this.rdoBtnCandy);
            this.panel1.Controls.Add(this.rdoButtonChips);
            this.panel1.Controls.Add(this.rdoBtnCola);
            this.panel1.Location = new System.Drawing.Point(23, 61);
            this.panel1.Name = "panel1";
            this.panel1.Size = new System.Drawing.Size(754, 97);
            this.panel1.TabIndex = 0;
            // 
            // rdoBtnCandy
            // 
            this.rdoBtnCandy.AutoSize = true;
            this.rdoBtnCandy.Location = new System.Drawing.Point(640, 32);
            this.rdoBtnCandy.Name = "rdoBtnCandy";
            this.rdoBtnCandy.Size = new System.Drawing.Size(79, 24);
            this.rdoBtnCandy.TabIndex = 2;
            this.rdoBtnCandy.TabStop = true;
            this.rdoBtnCandy.Text = "Candy";
            this.rdoBtnCandy.UseVisualStyleBackColor = true;
            // 
            // rdoButtonChips
            // 
            this.rdoButtonChips.AutoSize = true;
            this.rdoButtonChips.Location = new System.Drawing.Point(335, 32);
            this.rdoButtonChips.Name = "rdoButtonChips";
            this.rdoButtonChips.Size = new System.Drawing.Size(74, 24);
            this.rdoButtonChips.TabIndex = 1;
            this.rdoButtonChips.TabStop = true;
            this.rdoButtonChips.Text = "Chips";
            this.rdoButtonChips.UseVisualStyleBackColor = true;
            // 
            // rdoBtnCola
            // 
            this.rdoBtnCola.AutoSize = true;
            this.rdoBtnCola.Location = new System.Drawing.Point(29, 32);
            this.rdoBtnCola.Name = "rdoBtnCola";
            this.rdoBtnCola.Size = new System.Drawing.Size(66, 24);
            this.rdoBtnCola.TabIndex = 0;
            this.rdoBtnCola.TabStop = true;
            this.rdoBtnCola.Text = "Cola";
            this.rdoBtnCola.UseVisualStyleBackColor = true;
            // 
            // lblSelect
            // 
            this.lblSelect.AutoSize = true;
            this.lblSelect.Location = new System.Drawing.Point(19, 19);
            this.lblSelect.Name = "lblSelect";
            this.lblSelect.Size = new System.Drawing.Size(109, 20);
            this.lblSelect.TabIndex = 1;
            this.lblSelect.Text = "SelectProduct";
            // 
            // BtnVendProduct
            // 
            this.BtnVendProduct.Location = new System.Drawing.Point(358, 690);
            this.BtnVendProduct.Name = "BtnVendProduct";
            this.BtnVendProduct.Size = new System.Drawing.Size(100, 44);
            this.BtnVendProduct.TabIndex = 2;
            this.BtnVendProduct.Text = "OK";
            this.BtnVendProduct.UseVisualStyleBackColor = true;
            this.BtnVendProduct.Click += new System.EventHandler(this.BtnVendProduct_Click);
            // 
            // panel2
            // 
            this.panel2.Controls.Add(this.btnQuarter);
            this.panel2.Controls.Add(this.btnDime);
            this.panel2.Controls.Add(this.btnNickels);
            this.panel2.Location = new System.Drawing.Point(23, 229);
            this.panel2.Name = "panel2";
            this.panel2.Size = new System.Drawing.Size(754, 100);
            this.panel2.TabIndex = 3;
            // 
            // btnQuarter
            // 
            this.btnQuarter.Location = new System.Drawing.Point(559, 28);
            this.btnQuarter.Name = "btnQuarter";
            this.btnQuarter.Size = new System.Drawing.Size(160, 43);
            this.btnQuarter.TabIndex = 2;
            this.btnQuarter.Text = "Quarter";
            this.btnQuarter.UseVisualStyleBackColor = true;
            this.btnQuarter.Click += new System.EventHandler(this.btnQuarter_Click);
            // 
            // btnDime
            // 
            this.btnDime.Location = new System.Drawing.Point(297, 29);
            this.btnDime.Name = "btnDime";
            this.btnDime.Size = new System.Drawing.Size(160, 43);
            this.btnDime.TabIndex = 1;
            this.btnDime.Text = "Dime";
            this.btnDime.UseVisualStyleBackColor = true;
            this.btnDime.Click += new System.EventHandler(this.btnDime_Click);
            // 
            // btnNickels
            // 
            this.btnNickels.Location = new System.Drawing.Point(29, 28);
            this.btnNickels.Name = "btnNickels";
            this.btnNickels.Size = new System.Drawing.Size(160, 43);
            this.btnNickels.TabIndex = 0;
            this.btnNickels.Text = "Nickel";
            this.btnNickels.UseVisualStyleBackColor = true;
            this.btnNickels.Click += new System.EventHandler(this.btnNickels_Click);
            // 
            // lblPayment
            // 
            this.lblPayment.AutoSize = true;
            this.lblPayment.Location = new System.Drawing.Point(19, 183);
            this.lblPayment.Name = "lblPayment";
            this.lblPayment.Size = new System.Drawing.Size(90, 20);
            this.lblPayment.TabIndex = 4;
            this.lblPayment.Text = "InsertCoins";
            // 
            // lblDenomination
            // 
            this.lblDenomination.AutoSize = true;
            this.lblDenomination.Location = new System.Drawing.Point(19, 356);
            this.lblDenomination.Name = "lblDenomination";
            this.lblDenomination.Size = new System.Drawing.Size(132, 20);
            this.lblDenomination.TabIndex = 5;
            this.lblDenomination.Text = "Available Amount";
            // 
            // panel3
            // 
            this.panel3.Controls.Add(this.lblAmount);
            this.panel3.Location = new System.Drawing.Point(23, 400);
            this.panel3.Name = "panel3";
            this.panel3.Size = new System.Drawing.Size(288, 67);
            this.panel3.TabIndex = 6;
            // 
            // lblAmount
            // 
            this.lblAmount.AutoSize = true;
            this.lblAmount.Font = new System.Drawing.Font("Microsoft Sans Serif", 14F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblAmount.Location = new System.Drawing.Point(23, 17);
            this.lblAmount.Name = "lblAmount";
            this.lblAmount.Size = new System.Drawing.Size(49, 32);
            this.lblAmount.TabIndex = 0;
            this.lblAmount.Text = "$0";
            // 
            // lblStatus
            // 
            this.lblStatus.AutoSize = true;
            this.lblStatus.Font = new System.Drawing.Font("Microsoft Sans Serif", 11F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblStatus.Location = new System.Drawing.Point(21, 27);
            this.lblStatus.Name = "lblStatus";
            this.lblStatus.Size = new System.Drawing.Size(164, 26);
            this.lblStatus.TabIndex = 7;
            this.lblStatus.Text = "INSERT COIN";
            // 
            // panel4
            // 
            this.panel4.Controls.Add(this.lblStatus);
            this.panel4.Location = new System.Drawing.Point(27, 552);
            this.panel4.Name = "panel4";
            this.panel4.Size = new System.Drawing.Size(750, 82);
            this.panel4.TabIndex = 8;
            // 
            // lblStatusHeader
            // 
            this.lblStatusHeader.AutoSize = true;
            this.lblStatusHeader.Location = new System.Drawing.Point(23, 501);
            this.lblStatusHeader.Name = "lblStatusHeader";
            this.lblStatusHeader.Size = new System.Drawing.Size(56, 20);
            this.lblStatusHeader.TabIndex = 9;
            this.lblStatusHeader.Text = "Status";
            // 
            // panel5
            // 
            this.panel5.Controls.Add(this.lblChgVal);
            this.panel5.Location = new System.Drawing.Point(490, 400);
            this.panel5.Name = "panel5";
            this.panel5.Size = new System.Drawing.Size(292, 67);
            this.panel5.TabIndex = 10;
            // 
            // lblChgVal
            // 
            this.lblChgVal.AutoSize = true;
            this.lblChgVal.Font = new System.Drawing.Font("Microsoft Sans Serif", 14F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblChgVal.Location = new System.Drawing.Point(16, 17);
            this.lblChgVal.Name = "lblChgVal";
            this.lblChgVal.Size = new System.Drawing.Size(49, 32);
            this.lblChgVal.TabIndex = 1;
            this.lblChgVal.Text = "$0";
            // 
            // lblChange
            // 
            this.lblChange.AutoSize = true;
            this.lblChange.Location = new System.Drawing.Point(490, 356);
            this.lblChange.Name = "lblChange";
            this.lblChange.Size = new System.Drawing.Size(65, 20);
            this.lblChange.TabIndex = 11;
            this.lblChange.Text = "Change";
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(9F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(808, 774);
            this.Controls.Add(this.lblChange);
            this.Controls.Add(this.panel5);
            this.Controls.Add(this.lblStatusHeader);
            this.Controls.Add(this.panel4);
            this.Controls.Add(this.panel3);
            this.Controls.Add(this.lblDenomination);
            this.Controls.Add(this.lblPayment);
            this.Controls.Add(this.panel2);
            this.Controls.Add(this.BtnVendProduct);
            this.Controls.Add(this.lblSelect);
            this.Controls.Add(this.panel1);
            this.Name = "Form1";
            this.Text = "Form1";
            this.panel1.ResumeLayout(false);
            this.panel1.PerformLayout();
            this.panel2.ResumeLayout(false);
            this.panel3.ResumeLayout(false);
            this.panel3.PerformLayout();
            this.panel4.ResumeLayout(false);
            this.panel4.PerformLayout();
            this.panel5.ResumeLayout(false);
            this.panel5.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Panel panel1;
        private System.Windows.Forms.RadioButton rdoBtnCandy;
        private System.Windows.Forms.RadioButton rdoButtonChips;
        private System.Windows.Forms.RadioButton rdoBtnCola;
        private System.Windows.Forms.Label lblSelect;
        private System.Windows.Forms.Button BtnVendProduct;
        private System.Windows.Forms.Panel panel2;
        private System.Windows.Forms.Button btnQuarter;
        private System.Windows.Forms.Button btnDime;
        private System.Windows.Forms.Button btnNickels;
        private System.Windows.Forms.Label lblPayment;
        private System.Windows.Forms.Label lblDenomination;
        private System.Windows.Forms.Panel panel3;
        private System.Windows.Forms.Label lblAmount;
        private System.Windows.Forms.Label lblStatus;
        private System.Windows.Forms.Panel panel4;
        private System.Windows.Forms.Label lblStatusHeader;
        private System.Windows.Forms.Panel panel5;
        private System.Windows.Forms.Label lblChgVal;
        private System.Windows.Forms.Label lblChange;
    }
}

