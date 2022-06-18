import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolCampanignComponent } from './school-campanign.component';

describe('SchoolCampanignComponent', () => {
  let component: SchoolCampanignComponent;
  let fixture: ComponentFixture<SchoolCampanignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolCampanignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolCampanignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
