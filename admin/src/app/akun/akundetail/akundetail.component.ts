import { Component, OnInit } from '@angular/core';
import { Http, Response, Request} from '@angular/http';
import { Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-akundetail',
  templateUrl: './akundetail.component.html',
  styleUrls: ['./akundetail.component.css']
})
export class AkundetailComponent implements OnInit {
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
      this.http.get('https://penyewaanbatch124.herokuapp.com/api/akun/'+this.id)
      .subscribe((res:Response)=>{
        this.dataDetail=res.json();
       
      })
    // }
  }


 

}
