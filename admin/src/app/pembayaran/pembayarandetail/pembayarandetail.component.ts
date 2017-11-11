import { Component, OnInit } from '@angular/core';
import { Http, Response, Request} from '@angular/http';
import { Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pembayarandetail',
  templateUrl: './pembayarandetail.component.html',
  styleUrls: ['./pembayarandetail.component.css']
})
export class PembayarandetailComponent implements OnInit {
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
      this.http.get('https://penyewaanbatch124.herokuapp.com/api/pembayaran/'+this.id+'?token='+localStorage.getItem("token"))
      .subscribe((res:Response)=>{
        this.dataDetail=res.json();
        debugger;
       
      })
    // }
  }

}

