import { Component, OnInit } from '@angular/core';
import { Http, Response, Request} from '@angular/http';
import { Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-data-sewadetail',
  templateUrl: './data-sewadetail.component.html',
  styleUrls: ['./data-sewadetail.component.css']
})
export class DataSewadetailComponent implements OnInit {
  id:String;
  dataDetail:any;

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
      this.http.get('https://penyewaanbatch124.herokuapp.com/api/datasewa/'+this.id+'?token='+localStorage.getItem("token"))
      .subscribe((res:Response)=>{
        this.dataDetail=res.json();
        this.dataDetail.TglSelesai = this.dataDetail.TglSelesai.toString().slice(0,10);
        this.dataDetail.TglMulai = this.dataDetail.TglMulai.toString().slice(0,10);
        debugger;
       
      })
    // }
  }
}
