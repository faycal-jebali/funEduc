import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillTheBlanksComponent } from './fill-the-blanks.component';

describe('FillTheBlanksComponent', () => {
  let component: FillTheBlanksComponent;
  let fixture: ComponentFixture<FillTheBlanksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FillTheBlanksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FillTheBlanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
