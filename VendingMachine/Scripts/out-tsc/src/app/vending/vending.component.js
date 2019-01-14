import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { VendingService } from '../vending.service';
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
    VendingComponent = tslib_1.__decorate([
        Component({
            selector: 'app-vending',
            templateUrl: './vending.component.html',
            styleUrls: ['./vending.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [VendingService])
    ], VendingComponent);
    return VendingComponent;
}());
export { VendingComponent };
//# sourceMappingURL=vending.component.js.map