import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { PublicApiService } from "./public-api.service";

@Injectable({
  providedIn: 'root'
})
export class NewCategoriesService extends PublicApiService {
  getUrl(): string {
    throw new Error('Method not implemented.');
  }

  public constructor(http: HttpClient) {
    super (http);
   }

  

  getCategories<Categories>(): Observable<Categories> {
    return this.get<Categories>(this.getUrl());
  }

  postCategories<Categories>(categories: Categories): Observable<Categories> {
    return this.post<Categories>(categories);
  }

  putCategories<Categories>(categories: any, id: string): Observable<Categories> {
    return this.put<Categories>(id, categories);
  }

  getCategoriesById<Categories>(id: string): Observable<Categories> {
    return this.getById<Categories>(this.getUrl()+'/' + id);
  }
  deleteCategories<Categories>(id: string): Observable<Categories> {
    return this.delete<Categories>(this.getUrl()+'/' + id);
  }
}

