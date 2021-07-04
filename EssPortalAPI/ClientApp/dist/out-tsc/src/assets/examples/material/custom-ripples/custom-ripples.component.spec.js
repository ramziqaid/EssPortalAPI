import { TestBed, waitForAsync } from '@angular/core/testing';
import { CustomRipplesComponent } from './custom-ripples.component';
describe('CustomRipplesComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [CustomRipplesComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(CustomRipplesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=custom-ripples.component.spec.js.map