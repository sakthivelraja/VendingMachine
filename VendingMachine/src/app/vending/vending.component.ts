import { Component, OnInit } from '@angular/core';
import { VendingService } from '../vending.service';
import { VendingRequest } from '../vending-request';
import { Currency } from '../currency';
import { VendingResponse } from 'src/app/vending-response';

 enum denominations {
    nickel = 5,
    dime = 10,
    quarter = 25,
 }

const cola: string = "Cola";
const chips: string = "Chips";
const candy: string = "Candy";


@Component({
  selector: 'app-vending',
  templateUrl: './vending.component.html',
  styleUrls: ['./vending.component.css']
})
export class VendingComponent implements OnInit {

    vendingResp: VendingResponse = { Change: "0", IsAvailable: false, IsValidTransaction: false, Message: "INSERT COIN", ProductName: "" };
    vendingReq: VendingRequest = { actualAmount: 10, productName: "Cola" };
    currencyVal: Currency = { AvailableAmount: 0, RemainingChange: 0 };
    selectedItem: string = "";

    constructor(private vendingServ: VendingService) { }

    ngOnInit() {
    }

    public vendingProduct(venReq: VendingRequest): void {
        this.vendingServ.buyProductFromVending(venReq).subscribe((data: VendingResponse) => {     
            this.vendingResp = data;
        });
    }

    public nickelClick() {
        this.currencyVal.AvailableAmount += denominations.nickel;
    }

    public dimeClick() {
        this.currencyVal.AvailableAmount += denominations.dime;
    }

    public quarterClick() {
        this.currencyVal.AvailableAmount += denominations.quarter;
    }

    public buyItem() {

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

    }

    public cancelTransaction() {
        if (this.currencyVal.AvailableAmount > 0) {            
            this.vendingResp.Change = '' + (this.currencyVal.AvailableAmount / 100) + '';
            this.currencyVal.AvailableAmount = 0;
            this.vendingResp.Message = "REFUND COMPLETE";
        }
        else {
            this.vendingResp.Message = "INSERT COIN";
        }
    }

}
