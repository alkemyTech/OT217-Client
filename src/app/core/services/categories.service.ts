import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CategoriesService {
  constructor(private http: HttpClient) {}

  url: string = "https://ongapi.alkemy.org/api/categories";

  getCategories(): Observable<any> {
    return this.http.get(this.url);
  }

  postCategories(categories: any): Observable<any> { 
    return this.http.post(this.url, categories)
  }

  putCategories(categories: any, id: string): Observable<any> { 
    return this.http.put(this.url +'/'+ id, categories)
  }
}
