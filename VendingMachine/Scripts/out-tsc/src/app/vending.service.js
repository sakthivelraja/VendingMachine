import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
var httpOptions = {
    headers: new HttpHeaders({
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
    VendingService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], VendingService);
    return VendingService;
}());
export { VendingService };
//# sourceMappingURL=vending.service.js.map