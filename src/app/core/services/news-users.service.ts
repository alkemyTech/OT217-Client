import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PublicapiServiceService } from './publicapi-service.service';

@Injectable({
  providedIn: 'root'
})
export class NewsUsersService extends PublicapiServiceService{

  constructor(http:HttpClient, ) {
    super(http)
   }

   getUsers<Users>():Observable<Users>{
    return this.get<Users>('users');
  }
  postUsers<Users>(users:Users):Observable<Users>{
    return this.post<Users>(users);
  }

  putUsers<Users>(users:any, id:string):Observable<Users>{
    return this.put<Users>(id,users);
  }
  getUsersById<Users>(id:string):Observable<Users>{
    return this.getById<Users>('users/'+id);
  }
  deleteUsers<Users>(id:string):Observable<Users>{
    return this.delete<Users>("users/" +id);
  }

}
