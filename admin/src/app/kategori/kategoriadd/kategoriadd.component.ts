import { Component, OnInit } from '@angular/core';
import { Http, Response, Request, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';
import { Data } from './kategoriaddModel';

@Component({
  selector: 'app-kategoriadd',
  templateUrl: './kategoriadd.component.html',
  styleUrls: ['./kategoriadd.component.css']
})
export class KategoriaddComponent implements OnInit {
  dataKategori: Data;
  constructor(private http:Http, private route:ActivatedRoute) {  }

  ngOnInit() {
    // if (document.cookie=="") {
    //   window.location.href='./login';
    // }else{
     
    this.dataKategori = new Data();
    // }
  }

 

  createKategori(dataKategori){
    // if (document.cookie=="") {
    //   window.location.href='./login';
    // }else{
      let x = document.forms["kategoriadd"]["KdKategori"].value;
      let y = document.forms["kategoriadd"]["NamaKategori"].value;
     

    if (x=="" || y=="") {
      alert("data harus diisi semua")
    }else{
      let header = new Headers({'Content-Type':'application/json'});
      let opsi = new RequestOptions({headers:header});
      let data = JSON.stringify(this.dataKategori);
      this.http.post('https://penyewaanbatch124.herokuapp.com/api/kategori',data,opsi)
      .subscribe((res:Response)=>{
        window.location.href='./kategori';
      })
    }
    
  // }
}
}
