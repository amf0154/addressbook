import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { Contact } from './contacts';
@Injectable({
  providedIn: 'root'
})
export class SendDataService {

 private _url='http://localhost:3000/api/add';
  //private _url='https://cd2qsyig.apps.lair.io/api/test/';
  constructor(private http: HttpClient) { }
  sendContact(contact:Contact): Observable<Contact>{
    const httpOptions = {
   headers: new HttpHeaders({
     'Content-Type':  'application/json',
     'Authorization': 'my-auth-token'
   })
 };
     return this.http.post<Contact>(this._url, contact, httpOptions);
   } 
}
