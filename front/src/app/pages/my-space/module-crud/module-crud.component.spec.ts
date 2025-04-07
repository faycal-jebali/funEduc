import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleCrudComponent } from './module-crud.component';

describe('ModuleCrudComponent', () => {
  let component: ModuleCrudComponent;
  let fixture: ComponentFixture<ModuleCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuleCrudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
