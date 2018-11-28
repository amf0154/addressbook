import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IContacts } from './icontacts';
import { Contact } from './contacts';
@Injectable({
  providedIn: 'root'
})
export class AddresesService {
  private _urlSendData = 'http://localhost:3000/api/add';
  private _urlGetData = 'http://localhost:3000/api/getall';
  constructor(private http: HttpClient) { }
  getContacts():Observable<IContacts[]>{
    return this.http.get<IContacts[]>(this._urlGetData);
  }
  sendContact(contact:Contact): Observable<Contact>{
    const httpOptions = {
   headers: new HttpHeaders({
     'Content-Type':  'application/json',
     'Authorization': 'my-auth-token'
   })
 };
     return this.http.post<Contact>(this._urlSendData, contact, httpOptions);
   } 
}
