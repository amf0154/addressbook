import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IContacts } from './icontacts';
import { Contact } from './contacts';
import { Config } from './config';
@Injectable({
  providedIn: 'root'
})
export class AddresesService {
  private cfg = new Config;
  private _urlSendData = this.cfg.api_url + '/add';
  private _urlGetDataById = this.cfg.api_url + '/get/';
  private _urlGetData = this.cfg.api_url + '/getall';
  constructor(private http: HttpClient) { }
  getContacts():Observable<IContacts[]>{
    return this.http.get<IContacts[]>(this._urlGetData);
  }
  sendContact(contact:Contact): Observable<Contact>{
    const httpOptions = {
    headers: new HttpHeaders({'Content-Type':  'application/json'})
    };
    return this.http.post<Contact>(this._urlSendData, contact, httpOptions);
  } 
   getContactById(id):Observable<IContacts>{
    return this.http.get<IContacts>(this._urlGetDataById + id);
  }
}
