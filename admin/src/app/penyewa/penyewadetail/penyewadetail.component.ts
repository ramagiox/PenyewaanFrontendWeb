import { Component, OnInit } from '@angular/core';
import { Http, Response, Request} from '@angular/http';
import { Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-penyewadetail',
  templateUrl: './penyewadetail.component.html',
  styleUrls: ['./penyewadetail.component.css']
})
export class PenyewadetailComponent implements OnInit {
  id:String;
  dataDetail:Object;
  constructor(private http:Http, private route:ActivatedRoute) {
    this.route.params.subscribe(params =>{
      this.id=params['id'];
    })
  }
   

  ngOnInit() {
    this.id;
    this.http.get('https://penyewaanbatch124.herokuapp.com/api/penyewa/'+this.id)
    .subscribe((res:Response)=>{
      this.dataDetail=res.json();
      debugger;
     
    })
  }

}
