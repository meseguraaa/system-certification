import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CetCadaCerComponent } from './cet-cada-cer.component';

describe('CetCadaCerComponent', () => {
  let component: CetCadaCerComponent;
  let fixture: ComponentFixture<CetCadaCerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CetCadaCerComponent]
    });
    fixture = TestBed.createComponent(CetCadaCerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
