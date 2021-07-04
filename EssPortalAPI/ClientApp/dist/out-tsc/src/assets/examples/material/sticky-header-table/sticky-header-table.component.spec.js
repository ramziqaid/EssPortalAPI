import { TestBed, waitForAsync } from '@angular/core/testing';
import { StickyHeaderTableComponent } from './sticky-header-table.component';
describe('StickyHeaderTableComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [StickyHeaderTableComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(StickyHeaderTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=sticky-header-table.component.spec.js.map