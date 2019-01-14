using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace VendingApi.Models
{
    public class ApiResponse
    {
       public  bool IsValidTransaction;

        public string ProductName;

        public bool IsAvailable;

        public string Change;

        public string Message;
    }
}