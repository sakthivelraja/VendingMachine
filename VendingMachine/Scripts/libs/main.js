(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n    <h1>\r\n        Welcome to {{ title }}!\r\n    </h1>\r\n</div>\r\n<!--<img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\r\n</div>\r\n<h2>Here are some links to help you start: </h2>\r\n<ul>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\r\n  </li>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/cli\">CLI Documentation</a></h2>\r\n  </li>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\r\n  </li>\r\n</ul>-->\r\n<app-vending></app-vending>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'VendingMachineApp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _vending_vending_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vending/vending.component */ "./src/app/vending/vending.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _vending_vending_component__WEBPACK_IMPORTED_MODULE_5__["VendingComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/vending.service.ts":
/*!************************************!*\
  !*** ./src/app/vending.service.ts ***!
  \************************************/
/*! exports provided: VendingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendingService", function() { return VendingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var VendingService = /** @class */ (function () {
    function VendingService(httpClient) {
        this.httpClient = httpClient;
    }
    //buyProductFromVending(req: VendingRequest): Observable<VendingResponse> {
    //    return this.httpClient.post(`http://localhost/VendingMachineApi/api/vending/buyProduct`, req,httpOptions).
    //        pipe(
    //        map((item: any) => item.map(p => <VendingResponse>
    //            {
    //                isValidTransaction: p.isValidTransaction,
    //                change: p.change,
    //                isAvailable: p.isAvailable,
    //                message: p.message,
    //                productName: p.productName
    //            })));
    //}
    VendingService.prototype.buyProductFromVending = function (req) {
        return this.httpClient.post("http://localhost/VendingMachineApi/api/vending/buyProduct", req, httpOptions).
            pipe();
    };
    VendingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], VendingService);
    return VendingService;
}());



/***/ }),

/***/ "./src/app/vending/vending.component.css":
/*!***********************************************!*\
  !*** ./src/app/vending/vending.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlbmRpbmcvdmVuZGluZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/vending/vending.component.html":
/*!************************************************!*\
  !*** ./src/app/vending/vending.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n    <div class=\"col-md-2\"></div>\r\n    <div class=\"col-md-8\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n                <h3 class=\"panel-title\" style=\"text-align:center; font-weight:bold\">Vending Machine</h3>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                        <h3 class=\"panel-title\" style=\"font-weight:bold\">Select Product</h3>\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                        <fieldset id=\"productSelection\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-4\">\r\n                                    <input type=\"radio\" name=\"productSelection\" value = \"Cola\" [(ngModel)]=\"selectedItem\"/> &nbsp; <label class=\"form-group\">Cola ($1)</label>\r\n                                </div>\r\n                                <div class=\"col-md-4\" style=\"text-align:center\">\r\n                                    <input type=\"radio\" name=\"productSelection\" value=\"Chips\" [(ngModel)]=\"selectedItem\"/> &nbsp; <label class=\"form-group\">Chips ($0.50)</label>\r\n                                </div>\r\n                                <div class=\"col-md-4\" style=\"text-align:right\">\r\n                                    <input type=\"radio\" name=\"productSelection\" value=\"Candy\" [(ngModel)]=\"selectedItem\"/> &nbsp; <label class=\"form-group\">Candy ($0.65)</label>\r\n                                </div>\r\n                            </div>\r\n                        </fieldset>\r\n                    </div>\r\n                </div>\r\n                <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                        <h3 class=\"panel-title\" style=\"font-weight:bold\">Insert Coins</h3>\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-4\">\r\n                                <input type=\"submit\" value=\"Nickel\" class=\"btn btn-warning btn-block\" (click)=\"nickelClick()\">\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <input type=\"submit\" value=\"Dime\" class=\"btn btn-primary btn-block\" (click)=\"dimeClick()\">\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <input type=\"submit\" value=\"Quarter\" class=\"btn btn-success btn-block\" (click)=\"quarterClick()\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"panel panel-default\">\r\n                            <div class=\"panel-heading\">\r\n                                <h3 class=\"panel-title\" style=\"font-weight:bold\">Available Amount</h3>\r\n                            </div>\r\n                            <div class=\"panel-body\" >\r\n                                <h3><span class=\"label label-success\">${{currencyVal.AvailableAmount/100}}</span></h3>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"panel panel-default\">\r\n                            <div class=\"panel-heading\">\r\n                                <h3 class=\"panel-title\" style=\"font-weight:bold\">Remaining Change</h3>\r\n                            </div>\r\n                            <div class=\"panel-body\">\r\n                                <h3><span class=\"label label-primary\">${{vendingResp.Change}}</span></h3>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                        <h3 class=\"panel-title\" style=\"font-weight:bold\">Status</h3>\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                        <h3>{{vendingResp.Message}}</h3>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"col-md-6\">\r\n                            <input type=\"submit\" value=\"Cancel\" class=\"btn btn-danger btn-block\" (click)=\"cancelTransaction()\"  style=\"float:left\" />\r\n                        </div>\r\n                        <div class=\"col-md-6\" >\r\n                            <input type=\"submit\" value=\"Buy Item\" class=\"btn btn-success btn-block\" (click)=\"buyItem()\" style=\"float:right\"/>\r\n                        </div>                       \r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<br />\r\n<br />\r\n"

/***/ }),

/***/ "./src/app/vending/vending.component.ts":
/*!**********************************************!*\
  !*** ./src/app/vending/vending.component.ts ***!
  \**********************************************/
/*! exports provided: VendingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendingComponent", function() { return VendingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _vending_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vending.service */ "./src/app/vending.service.ts");



var denominations;
(function (denominations) {
    denominations[denominations["nickel"] = 5] = "nickel";
    denominations[denominations["dime"] = 10] = "dime";
    denominations[denominations["quarter"] = 25] = "quarter";
})(denominations || (denominations = {}));
var cola = "Cola";
var chips = "Chips";
var candy = "Candy";
var VendingComponent = /** @class */ (function () {
    function VendingComponent(vendingServ) {
        this.vendingServ = vendingServ;
        this.vendingResp = { Change: "0", IsAvailable: false, IsValidTransaction: false, Message: "INSERT COIN", ProductName: "" };
        this.vendingReq = { actualAmount: 10, productName: "Cola" };
        this.currencyVal = { AvailableAmount: 0, RemainingChange: 0 };
        this.selectedItem = "";
    }
    VendingComponent.prototype.ngOnInit = function () {
    };
    VendingComponent.prototype.vendingProduct = function (venReq) {
        var _this = this;
        this.vendingServ.buyProductFromVending(venReq).subscribe(function (data) {
            _this.vendingResp = data;
        });
    };
    VendingComponent.prototype.nickelClick = function () {
        this.currencyVal.AvailableAmount += denominations.nickel;
    };
    VendingComponent.prototype.dimeClick = function () {
        this.currencyVal.AvailableAmount += denominations.dime;
    };
    VendingComponent.prototype.quarterClick = function () {
        this.currencyVal.AvailableAmount += denominations.quarter;
    };
    VendingComponent.prototype.buyItem = function () {
        if (this.selectedItem == cola) {
            this.vendingReq.productName = cola;
        }
        else if (this.selectedItem == chips) {
            this.vendingReq.productName = chips;
        }
        else {
            this.vendingReq.productName = candy;
        }
        this.vendingReq.actualAmount = (this.currencyVal.AvailableAmount / 100);
        this.vendingProduct(this.vendingReq);
        //Reset Values
        this.currencyVal.AvailableAmount = 0;
    };
    VendingComponent.prototype.cancelTransaction = function () {
        if (this.currencyVal.AvailableAmount > 0) {
            this.vendingResp.Change = '' + (this.currencyVal.AvailableAmount / 100) + '';
            this.currencyVal.AvailableAmount = 0;
            this.vendingResp.Message = "REFUND COMPLETE";
        }
        else {
            this.vendingResp.Message = "INSERT COIN";
        }
    };
    VendingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vending',
            template: __webpack_require__(/*! ./vending.component.html */ "./src/app/vending/vending.component.html"),
            styles: [__webpack_require__(/*! ./vending.component.css */ "./src/app/vending/vending.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_vending_service__WEBPACK_IMPORTED_MODULE_2__["VendingService"]])
    ], VendingComponent);
    return VendingComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Sakthivel Raja\Desktop\Study\VendingMachine\VendingMachine\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map