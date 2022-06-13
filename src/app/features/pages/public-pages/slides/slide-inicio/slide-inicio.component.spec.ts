import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideInicioComponent } from './slide-inicio.component';

describe('SlideInicioComponent', () => {
  let component: SlideInicioComponent;
  let fixture: ComponentFixture<SlideInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideInicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
