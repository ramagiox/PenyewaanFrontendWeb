import { Component, OnInit } from '@angular/core';
import { Http, Response, Request} from '@angular/http';
import { Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-barangdetail',
  templateUrl: './barangdetail.component.html',
  styleUrls: ['./barangdetail.component.css']
})
export class BarangdetailComponent implements OnInit {
  id:String;
  dataDetail:Object;

  constructor(private http:Http, private route:ActivatedRoute) { 
    this.route.params.subscribe(params =>{
      this.id=params['id'];
    })
  }

  ngOnInit() {
    // if (document.cookie=="") {
    //   window.location.href='./login';
    // }else{
    this.id;
      this.http.get('https://penyewaanbatch124.herokuapp.com/api/barang/'+this.id)
      .subscribe((res:Response)=>{
        this.dataDetail=res.json();
       
      })
    // }
  }


 

}
