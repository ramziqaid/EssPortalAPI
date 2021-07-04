import { TestBed, waitForAsync } from '@angular/core/testing';
import { ErrorInputComponent } from './error-input.component';
describe('ErrorInputComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ErrorInputComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ErrorInputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=error-input.component.spec.js.map