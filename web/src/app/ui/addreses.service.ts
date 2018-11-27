import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IContacts } from './icontacts';
@Injectable({
  providedIn: 'root'
})
export class AddresesService {

  private _url='http://localhost:3000/api/getall';
  constructor(private http: HttpClient) { }
  getContacts():Observable<IContacts[]>{
    return this.http.get<IContacts[]>(this._url);
  }
}
