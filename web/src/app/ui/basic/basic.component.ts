import { Component, OnInit } from '@angular/core';
import { AddresesService } from '../addreses.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
  public contacts =[];
  constructor(private _addressesService: AddresesService,private router: Router) { }

  ngOnInit() {
    this._addressesService.getContacts()
    .subscribe(data => this.contacts = data);
    
  }
  onShow(contact){
    this.router.navigate(['/view',contact._id]);
  }

  onEdit(contact){
    this.router.navigate(['/update',contact._id]);
  }
  
  onRemove(contact){
    this._addressesService.deleteContactById(contact._id)
    .subscribe(data =>{console.log(data)},error=>{console.log(error)});
    this._addressesService.getContacts()
    .subscribe(data => this.contacts = data);
  }
}
