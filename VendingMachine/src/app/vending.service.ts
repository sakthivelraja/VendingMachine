import { TestBed } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { VendingResponse } from './vending-response';
import { VendingRequest } from './vending-request';
import { HttpHeaders } from '@angular/common/http';
//import { catchError } from 'rxjs/internal/operators/catchError';
import { catchError } from 'rxjs/internal/operators';


const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable({
    providedIn: 'root'
})

export class VendingService {

    constructor(private httpClient: HttpClient) { }

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

    buyProductFromVending(req: VendingRequest): Observable<VendingResponse> {
        return this.httpClient.post<VendingResponse>(`http://localhost/VendingMachineApi/api/vending/buyProduct`, req, httpOptions).
            pipe();
    }

}
