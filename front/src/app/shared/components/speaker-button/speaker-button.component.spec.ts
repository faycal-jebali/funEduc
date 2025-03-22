import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerButtonComponent } from './speaker-button.component';

describe('SpeakerButtonComponent', () => {
  let component: SpeakerButtonComponent;
  let fixture: ComponentFixture<SpeakerButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SpeakerButtonComponent]
    });
    fixture = TestBed.createComponent(SpeakerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
