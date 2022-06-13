import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationActivitiesComponent } from './creation-activities.component';

describe('CreationActivitiesComponent', () => {
  let component: CreationActivitiesComponent;
  let fixture: ComponentFixture<CreationActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationActivitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
