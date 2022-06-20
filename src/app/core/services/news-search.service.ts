import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsSearchService {

  constructor(private _http: HttpClient) { }

  newsApiUrl = "https://ongapi.alkemy.org/api/news?search="

  getQuery(query: string) {
    const url = `${this.newsApiUrl}${query}`;

    return this._http.get(url);

  }

}
