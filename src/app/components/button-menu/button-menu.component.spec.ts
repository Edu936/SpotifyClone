import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonMenuComponent } from './button-menu.component';

describe('ButtonMenuComponent', () => {
  let component: ButtonMenuComponent;
  let fixture: ComponentFixture<ButtonMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonMenuComponent]
    });
    fixture = TestBed.createComponent(ButtonMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
