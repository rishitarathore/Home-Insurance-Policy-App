import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeStructureDetailsComponent } from './home-structure-details.component';

describe('HomeStructureDetailsComponent', () => {
  let component: HomeStructureDetailsComponent;
  let fixture: ComponentFixture<HomeStructureDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeStructureDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeStructureDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
