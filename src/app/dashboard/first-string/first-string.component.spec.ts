import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstStringComponent } from './first-string.component';

describe('FirstStringComponent', () => {
  let component: FirstStringComponent;
  let fixture: ComponentFixture<FirstStringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstStringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
