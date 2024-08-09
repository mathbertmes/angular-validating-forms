import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltInValidatorComponent } from './built-in-validator.component';

describe('BuiltInValidatorComponent', () => {
  let component: BuiltInValidatorComponent;
  let fixture: ComponentFixture<BuiltInValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuiltInValidatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuiltInValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
