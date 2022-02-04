import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JewelryItemComponent } from './jewelry-item.component';

describe('JewelryItemComponent', () => {
  let component: JewelryItemComponent;
  let fixture: ComponentFixture<JewelryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JewelryItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JewelryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
