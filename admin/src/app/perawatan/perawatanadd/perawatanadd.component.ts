import { Component, OnInit } from '@angular/core';
import { Http, Response, Request, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';

@Component({
  selector: 'app-perawatanadd',
  templateUrl: './perawatanadd.component.html',
  styleUrls: ['./perawatanadd.component.css']
})
export class PerawatanaddComponent implements OnInit {

  constructor(private http:Http) {  }
  
    ngOnInit() {
      if (document.cookie=="") {
        window.location.href='./login';
      }else{
      }
      
    }
    createPerawatan(kode,nama){

      if (document.cookie=="") {
        window.location.href='./login';
      }else{

      if (kode==null || nama==null) {
        alert("masih ada data yang kosong")
      }else{

      let header = new Headers({'Content-Type':'application/json'});
      let opsi = new RequestOptions({headers:header});
      let data = JSON.stringify({kdPerawatan:kode,NamaPerawatan:nama});
      this.http.post('https://rsegi.herokuapp.com/api/perawatan?'+document.cookie,data,opsi)
      .subscribe((res:Response)=>{
        window.location.href='./perawatan';
      })
    }
    }
  }
   
  
  }
  