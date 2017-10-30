import { Component, OnInit } from '@angular/core';
import { Http, Response, Request, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';


@Component({
  selector: 'app-provinsiadd',
  templateUrl: './provinsiadd.component.html',
  styleUrls: ['./provinsiadd.component.css']
})
export class ProvinsiaddComponent implements OnInit {


  constructor(private http:Http) {  }

  ngOnInit() {
    
  }
  createProvinsi(kode,nama){
    let header = new Headers({'Content-Type':'application/json'});
    let opsi = new RequestOptions({headers:header});
    let data = JSON.stringify({kdProvinsi:kode,NamaProvinsi:nama});
    this.http.post('http://localhost:8889/api/provinsi'+'?'+document.cookie,data,opsi)
    .subscribe((res:Response)=>{
      window.location.href='./provinsi';
      debugger;
    })
  }
 

}
