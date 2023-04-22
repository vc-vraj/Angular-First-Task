import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringConcatComponent } from './string-concat.component';

describe('StringConcatComponent', () => {
  let component: StringConcatComponent;
  let fixture: ComponentFixture<StringConcatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringConcatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StringConcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
