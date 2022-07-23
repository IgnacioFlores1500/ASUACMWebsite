import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyStaffComponent } from './body-staff.component';

describe('BodyStaffComponent', () => {
  let component: BodyStaffComponent;
  let fixture: ComponentFixture<BodyStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyStaffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
