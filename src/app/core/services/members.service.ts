import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { PublicApiService } from './public-api.service';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class MembersService extends PublicApiService {

    endpoint: string = environment.members;

    public constructor(_http: HttpClient) {
        super(_http);
    }

    postMembers<Members>(members: any): Observable<any> {
        return this.post<Members>(this.endpoint, members);
    }

    getMembers<Members>(): Observable<any> {
        return this.get<Members>(this.endpoint);
    }

    putMembers<Members>(members: any, id: string): Observable<Members> {
        return this.put<Members>(this.endpoint + "/" + id, members);
    }

    getMembersById<Members>(id: string): Observable<Members> {
        return this.getById<Members>(this.endpoint + "/" + id);
    }

    deleteMembers<Members>(id: string): Observable<Members> {
        return this.delete<Members>(this.endpoint + "/" + id);
    }

}






