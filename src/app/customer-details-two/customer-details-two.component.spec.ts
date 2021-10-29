import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDetailsTwoComponent } from './customer-details-two.component';

describe('CustomerDetailsTwoComponent', () => {
  let component: CustomerDetailsTwoComponent;
  let fixture: ComponentFixture<CustomerDetailsTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerDetailsTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDetailsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
