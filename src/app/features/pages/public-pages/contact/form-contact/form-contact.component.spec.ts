import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";

import { FormContactComponent } from "./form-contact.component";

describe("FormContactComponent", () => {
  let component: FormContactComponent;
  let fixture: ComponentFixture<FormContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [FormContactComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should  validate form", () => {
    const fixture = TestBed.createComponent(FormContactComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    const email = app.formLogin.controls["email"];
    const name = app.formLogin.controls["name"];
    const telephone = app.formLogin.controls["telephone"];
    const message = app.formLogin.controls["message"];
    email.setValue("holamundo@hotmail.com");
    name.setValue("fernando");
    telephone.setValue("45859658545");
    message.setValue("quiero informacion para donar");
    expect(app.formLogin.valid).toBeTrue();

    const btnElement = fixture.debugElement.query(By.css("button.btn"));
    btnElement.nativeElement.click();

    expect(app.isCheck).toBeTrue();
  });

  it("Should show error in api ", () => {
    const fixture = TestBed.createComponent(FormContactComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    const fail = app.showError;
    const email = app.formLogin.controls["email"];
    email.setValue("");

    expect(fail).toBeTrue();
  });
});
