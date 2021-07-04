import { TestBed, waitForAsync } from '@angular/core/testing';
import { BasicTooltipComponent } from './basic-tooltip.component';
describe('BasicTooltipComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [BasicTooltipComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(BasicTooltipComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=basic-tooltip.component.spec.js.map