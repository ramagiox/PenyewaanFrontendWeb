import { Component, OnInit } from '@angular/core';
import { Http, Response, Request} from '@angular/http';
import { Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pendaftarandetail',
  templateUrl: './pendaftarandetail.component.html',
  styleUrls: ['./pendaftarandetail.component.css']
})
export class PendaftarandetailComponent implements OnInit {
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
      this.http.get('https://rsegi.herokuapp.com/api/pendaftaran/'+this.id+'?'+document.cookie)
      .subscribe((res:Response)=>{
        this.dataDetail=res.json();
       
      })
    // }
  }


 

}
