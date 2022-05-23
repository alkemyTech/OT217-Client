import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CategoriesFormService } from 'src/app/shared/categories-form.service';

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.scss']
})


export class CategoriesFormComponent implements OnInit {
  
    public Editor = ClassicEditor;
    // ...



  constructor(private categoriesService : CategoriesFormService) { }

  ngOnInit(): void {
    this.getCategories()
  }

  getCategories(){
    this.categoriesService.getCategories().subscribe(
      res => console.log(res),
      error => console.log(error)
    )
  }

}
