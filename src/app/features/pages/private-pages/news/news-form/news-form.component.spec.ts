import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { NewsService } from 'src/app/core/services/news.service';


import { NewsFormComponent } from './news-form.component';

import { NG_VALUE_ACCESSOR, ReactiveFormsModule, ControlValueAccessor } from '@angular/forms';
import { MatDialogModule} from '@angular/material/dialog';


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
      declarations: [ NewsFormComponent ],
      imports: [HttpClientTestingModule, ReactiveFormsModule, RouterTestingModule, MatDialogModule ], 
      providers: [NewsService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Component news-form should be created', () => {
    const fixture = TestBed.createComponent(NewsFormComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Components Validations', () =>{
    const fixture = TestBed.createComponent(NewsFormComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    const form = app.titleForm;
    const name = app.titleForm.controls['name']
    name.setValue('Franco')

    expect(form.valid).toBeTruthy();
  });

  it('API error is TRUE', () =>{
    const fixture = TestBed.createComponent(NewsFormComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    const error = app.testError;
    const name = app.titleForm.controls['name']
    name.setValue('')

    expect(error).toBeTruthy();
  });
});
