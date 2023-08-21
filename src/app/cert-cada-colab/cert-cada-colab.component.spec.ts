import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertCadaColabComponent } from './cert-cada-colab.component';

describe('CertCadaColabComponent', () => {
  let component: CertCadaColabComponent;
  let fixture: ComponentFixture<CertCadaColabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CertCadaColabComponent]
    });
    fixture = TestBed.createComponent(CertCadaColabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
