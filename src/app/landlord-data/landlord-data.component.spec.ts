import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandlordDataComponent } from './landlord-data.component';

describe('LandlordDataComponent', () => {
  let component: LandlordDataComponent;
  let fixture: ComponentFixture<LandlordDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandlordDataComponent]
    });
    fixture = TestBed.createComponent(LandlordDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
