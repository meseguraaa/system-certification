import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CetCadaBpComponent } from './cet-cada-bp.component';

describe('CetCadaBpComponent', () => {
  let component: CetCadaBpComponent;
  let fixture: ComponentFixture<CetCadaBpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CetCadaBpComponent]
    });
    fixture = TestBed.createComponent(CetCadaBpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
