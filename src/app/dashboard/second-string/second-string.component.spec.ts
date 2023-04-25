import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondStringComponent } from './second-string.component';

describe('SecondStringComponent', () => {
  let component: SecondStringComponent;
  let fixture: ComponentFixture<SecondStringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondStringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
