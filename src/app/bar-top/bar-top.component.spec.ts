import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarTopComponent } from './bar-top.component';

describe('BarTopComponent', () => {
  let component: BarTopComponent;
  let fixture: ComponentFixture<BarTopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarTopComponent]
    });
    fixture = TestBed.createComponent(BarTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
