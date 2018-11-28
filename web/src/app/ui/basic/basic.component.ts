import { Component, OnInit } from '@angular/core';
import { AddresesService } from '../addreses.service';
@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
  public contacts =[];
  constructor(private _addressesService: AddresesService) { }

  ngOnInit() {
    this._addressesService.getContacts()
    .subscribe(data => this.contacts = data);
    
  }

}
