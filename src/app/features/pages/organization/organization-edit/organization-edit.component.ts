import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { OrganizationService } from "src/app/core/services/organization.service";

@Component({
  selector: 'app-organization-edit',
  templateUrl: './organization-edit.component.html',
  styleUrls: ['./organization-edit.component.css']
})

export class OrganizationEditComponent implements OnInit {

  public Editor = ClassicEditor;
  myForm: FormGroup;
  urlImg: string = "";
  public myreg = ('^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$');
  public listaDatos: Array<any> = [];
  nameInput!: any;
  descriptionInput: any;
  description2Input: any;
  urlfacebookInput: any;
  urltwitterInput: any;
  urlinstagramInput: any;
  urllinkedinInput: any;

  constructor(private fb: FormBuilder, public dialog: MatDialog, private organizationService: OrganizationService) {

    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      logo: ['', [Validators.required]],
      description: ['', [Validators.required]],
      description2: ['', [Validators.required]],
      urlfacebook: ['', [Validators.pattern(this.myreg), Validators.required]],
      urltwitter: ['', [Validators.pattern(this.myreg), Validators.required]],
      urlinstagram: ['', [Validators.pattern(this.myreg), Validators.required]],
      urllinkedin: ['', [Validators.pattern(this.myreg), Validators.required]]
    });
  }

  ngOnInit(): void {
    this.organizationService.topOrganization().subscribe((result: any) => {
      this.nameInput = result.data.name;
      this.descriptionInput = result.data.long_description;
      this.description2Input = result.data.short_description;
      this.urlfacebookInput = result.data.facebook_url;
      this.urltwitterInput = result.data.twitter_url;
      this.urlinstagramInput = result.data.instagram_url;
      this.urllinkedinInput = result.data.linkedin_url;
    });
  }

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



