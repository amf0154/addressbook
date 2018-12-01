import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.css']
})
export class PageDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  public _id;
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) =>{
      this._id = params.get('id');
    })
  }

}
