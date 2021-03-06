import { TestBed, waitForAsync } from '@angular/core/testing';
import { AutocompleteOverviewComponent } from './autocomplete-overview.component';
describe('AutocompleteOverviewComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [AutocompleteOverviewComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(AutocompleteOverviewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=autocomplete-overview.component.spec.js.map