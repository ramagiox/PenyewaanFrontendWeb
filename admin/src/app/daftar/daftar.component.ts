import { Component, OnInit } from '@angular/core';
import { Http, Response, Request, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';
import { Data } from './daftarModel';

@Component({
  selector: 'app-daftar',
  templateUrl: './daftar.component.html',
  styleUrls: ['./daftar.component.css']
})
export class DaftarComponent implements OnInit {
  dataDaftar : Data;

  constructor(private http:Http, private route:ActivatedRoute) { }

  ngOnInit() {
    this.dataDaftar = new Data();
  }

  createDaftar(dataDaftar){
    let x = document.forms["daftar"]["UserName"].value;
    let y = document.forms["daftar"]["Password"].value;
    let re = /^\w+$/;

  if (x=="" || y=="") {
    alert("data harus diisi semua")
  }else if (!re.test(x)) {
    alert("Error: Username must contain only letters, numbers and underscores!");
  }else if (y.length < 6) {
    alert("Error: Password must contain at least six characters!");
  } else {
    let header = new Headers({'Content-Type':'application/json'});
    let opsi = new RequestOptions({headers:header});
    let data = JSON.stringify(this.dataDaftar);
    this.http.post('https://rsegi.herokuapp.com/api/login',data,opsi)
    .subscribe((res:Response)=>{
      window.location.href='./login';
    })
  }
  
}
}

