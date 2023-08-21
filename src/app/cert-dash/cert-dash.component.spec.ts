import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertDashComponent } from './cert-dash.component';

describe('CertDashComponent', () => {
  let component: CertDashComponent;
  let fixture: ComponentFixture<CertDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CertDashComponent]
    });
    fixture = TestBed.createComponent(CertDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
