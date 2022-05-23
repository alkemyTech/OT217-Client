import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CategoriesFormService {

  constructor(private http : HttpClient) { }

  getCategories() {
    return this.http.get('https://ongapi.alkemy.org/api/categories')
  }
}
