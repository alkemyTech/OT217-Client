import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBoardBackofficeComponent } from './dash-board-backoffice.component';

describe('DashBoardBackofficeComponent', () => {
  let component: DashBoardBackofficeComponent;
  let fixture: ComponentFixture<DashBoardBackofficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashBoardBackofficeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashBoardBackofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
