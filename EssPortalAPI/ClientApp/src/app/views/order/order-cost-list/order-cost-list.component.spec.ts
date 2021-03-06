import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OrderCostListComponent } from './order-cost-list.component';

describe('OrderCostListComponent', () => {
  let component: OrderCostListComponent;
  let fixture: ComponentFixture<OrderCostListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderCostListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderCostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
