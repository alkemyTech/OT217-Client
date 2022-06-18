/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { User.guardComponent } from './user.guard.component';

describe('User.guardComponent', () => {
  let component: User.guardComponent;
  let fixture: ComponentFixture<User.guardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ User.guardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(User.guardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
