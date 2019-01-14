import { TestBed } from '@angular/core/testing';
import { VendingService } from './vending.service';
describe('VendingService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(VendingService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=vending.service.spec.js.map