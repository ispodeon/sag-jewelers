import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessHoursCardComponent } from './business-hours-card.component';

describe('BusinessHoursCardComponent', () => {
  let component: BusinessHoursCardComponent;
  let fixture: ComponentFixture<BusinessHoursCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessHoursCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessHoursCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
