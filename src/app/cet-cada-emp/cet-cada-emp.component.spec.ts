import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CetCadaEmpComponent } from './cet-cada-emp.component';

describe('CetCadaEmpComponent', () => {
  let component: CetCadaEmpComponent;
  let fixture: ComponentFixture<CetCadaEmpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CetCadaEmpComponent]
    });
    fixture = TestBed.createComponent(CetCadaEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
