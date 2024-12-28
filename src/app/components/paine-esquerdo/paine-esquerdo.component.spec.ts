import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaineEsquerdoComponent } from './paine-esquerdo.component';

describe('PaineEsquerdoComponent', () => {
  let component: PaineEsquerdoComponent;
  let fixture: ComponentFixture<PaineEsquerdoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaineEsquerdoComponent]
    });
    fixture = TestBed.createComponent(PaineEsquerdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
