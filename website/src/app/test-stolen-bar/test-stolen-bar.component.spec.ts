import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestStolenBarComponent } from './test-stolen-bar.component';

describe('TestStolenBarComponent', () => {
  let component: TestStolenBarComponent;
  let fixture: ComponentFixture<TestStolenBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestStolenBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestStolenBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
