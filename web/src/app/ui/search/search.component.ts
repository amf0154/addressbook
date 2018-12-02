import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AddresesService } from '../addreses.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(private router: Router,private route: ActivatedRoute, private _addrService:AddresesService) { }
  public search_value = '';
  public contacts = [];

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.search_value = params.get('word');
    });
    this._addrService.getContacts()
    .subscribe(data => this.contacts = data);
  }

  onShow(contact){
    this.router.navigate(['/view',contact._id]);
  }

  onEdit(contact){
    this.router.navigate(['/update',contact._id]);
  }

  onRemove(contact){
    this._addrService.deleteContactById(contact._id)
    .subscribe(data =>{
      console.log(data)}
      ,error=>{
        console.log(error)
      });
    this._addrService.getContacts()
    .subscribe(data => this.contacts = data);
  }

}
