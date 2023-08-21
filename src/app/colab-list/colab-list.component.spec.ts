import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColabListComponent } from './colab-list.component';

describe('ColabListComponent', () => {
  let component: ColabListComponent;
  let fixture: ComponentFixture<ColabListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColabListComponent]
    });
    fixture = TestBed.createComponent(ColabListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
