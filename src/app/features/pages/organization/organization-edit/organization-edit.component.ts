import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';




@Component({
  selector: 'app-organization-edit',
  templateUrl: './organization-edit.component.html',
  styleUrls: ['./organization-edit.component.scss']
})
export class OrganizationEditComponent implements OnInit {

  public Editor = ClassicEditor;
  myForm: FormGroup;
  urlImg: string = "";
  public myreg = ('^(https?:\/\/)*[a-z0-9-]+(\.[a-z0-9-]+)+(\/[a-z0-9-]+)*\/?$');


  constructor(private fb: FormBuilder, public dialog: MatDialog) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      logo: ['', [Validators.required]],
      description: ['', [Validators.required]],
      description2: ['', [Validators.required]],
      urlfacebook: ['', [Validators.pattern(this.myreg), Validators.required, Validators.minLength(23)]],
      urltwitter: ['', [Validators.pattern(this.myreg), Validators.required, Validators.minLength(22)]],
      urlinstagram: ['', [Validators.pattern(this.myreg), Validators.required, Validators.minLength(24)]],
      urllinkedin: ['', [Validators.pattern(this.myreg), Validators.required, Validators.minLength(23)]]
    });
  }



  ngOnInit() {
  }

  ckeditorContent: any;



  addDescription() {

  };







  onFileChange(event: any) {
    const reader = new FileReader();





    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;

      reader.readAsDataURL(file);

      reader.onload = () => {
        this.urlImg = reader.result as string;
      }
    }

  }

}



