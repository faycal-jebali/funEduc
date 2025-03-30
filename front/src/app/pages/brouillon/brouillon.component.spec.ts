import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrouillonComponent } from './brouillon.component';

describe('BrouillonComponent', () => {
  let component: BrouillonComponent;
  let fixture: ComponentFixture<BrouillonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrouillonComponent]
    });
    fixture = TestBed.createComponent(BrouillonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
