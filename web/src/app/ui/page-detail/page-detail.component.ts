import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { AddresesService } from '../addreses.service';
import { Config } from '../config';
@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.css']
})
export class PageDetailComponent implements OnInit {
  private cfg = new Config;
  constructor(private route: ActivatedRoute,private addresesService:AddresesService) { }
  public contact = {};
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) =>{
      this.addresesService.getContactById(params.get('id'))
      .subscribe(data => {this.contact = data},error =>{console.log(error)});
    });
  }
  getNameGroupById(id){
    return this.cfg.idgroup[id];
  }
  checkLabelData(contact){
    return (contact.label)? contact.label : 'empty';
  }

}
