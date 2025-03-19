import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionExercicesFormComponent } from './section-exercices-form.component';

describe('SectionExercicesFormComponent', () => {
  let component: SectionExercicesFormComponent;
  let fixture: ComponentFixture<SectionExercicesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SectionExercicesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionExercicesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
