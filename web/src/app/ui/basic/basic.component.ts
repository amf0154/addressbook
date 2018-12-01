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

}
