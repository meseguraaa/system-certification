import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CetCadaGesComponent } from './cet-cada-ges.component';

describe('CetCadaGesComponent', () => {
  let component: CetCadaGesComponent;
  let fixture: ComponentFixture<CetCadaGesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CetCadaGesComponent]
    });
    fixture = TestBed.createComponent(CetCadaGesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
