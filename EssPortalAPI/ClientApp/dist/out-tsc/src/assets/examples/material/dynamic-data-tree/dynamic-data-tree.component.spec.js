import { TestBed, waitForAsync } from '@angular/core/testing';
import { DynamicDataTreeComponent } from './dynamic-data-tree.component';
describe('DynamicDataTreeComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [DynamicDataTreeComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(DynamicDataTreeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=dynamic-data-tree.component.spec.js.map