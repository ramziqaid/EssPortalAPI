import { TestBed, waitForAsync } from '@angular/core/testing';
import { AnimationTabGroupComponent } from './animation-tab-group.component';
describe('AnimationTabGroupComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [AnimationTabGroupComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(AnimationTabGroupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=animation-tab-group.component.spec.js.map