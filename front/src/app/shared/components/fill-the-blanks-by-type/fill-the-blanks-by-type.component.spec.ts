import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillTheBlanksByTypeComponent } from './fill-the-blanks-by-type.component';

describe('FillTheBlanksComponent', () => {
  let component: FillTheBlanksByTypeComponent;
  let fixture: ComponentFixture<FillTheBlanksByTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FillTheBlanksByTypeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FillTheBlanksByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
