import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidesModalComponent } from './slides-modal.component';

describe('SlidesModalComponent', () => {
  let component: SlidesModalComponent;
  let fixture: ComponentFixture<SlidesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidesModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
