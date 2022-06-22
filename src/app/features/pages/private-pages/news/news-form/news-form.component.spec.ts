import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";

import { NewsFormComponent } from './news-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule, ControlValueAccessor } from '@angular/forms';
import { MatDialogModule} from '@angular/material/dialog';
import { forwardRef } from '@angular/core';

import { Component } from '@angular/core';

import { async } from '@angular/core/testing';
import { MatOptionModule } from '@angular/material/core';

class MatSelectStubComponent implements ControlValueAccessor {
  writeValue(obj: any) {}
  registerOnChange(fn: any) {}
  registerOnTouched(fn: any) {}
  setDisabledState(isDisabled: boolean) {}
}


TestBed.configureTestingModule({
imports: [ HttpClientTestingModule, ReactiveFormsModule, RouterTestingModule, MatDialogModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: MatSelectStubComponent,
      multi: true,
    }
  ]
})
.compileComponents();




fdescribe('NewsFormComponent', () => {
  let component: NewsFormComponent;
  let fixture: ComponentFixture<NewsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('Component news-form should be created', () => {
    const fixture = TestBed.createComponent(NewsFormComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
