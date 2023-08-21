import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CetCadaNegComponent } from './cet-cada-neg.component';

describe('CetCadaNegComponent', () => {
  let component: CetCadaNegComponent;
  let fixture: ComponentFixture<CetCadaNegComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CetCadaNegComponent]
    });
    fixture = TestBed.createComponent(CetCadaNegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
