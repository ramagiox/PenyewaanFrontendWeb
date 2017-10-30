import { Component, OnInit } from '@angular/core';
import { Http, Response, Request, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';
import { Data } from './pembayaranaddModel';

@Component({
  selector: 'app-pembayaranadd',
  templateUrl: './pembayaranadd.component.html',
  styleUrls: ['./pembayaranadd.component.css']
})
export class PembayaranaddComponent implements OnInit {
  dataPembayaran: Data;
  KategoriBarang : Object;
  constructor(private http:Http, private route:ActivatedRoute) {  }
  
    ngOnInit() {
      // if (document.cookie=="") {
      //   window.location.href='./login';
      // }else{
       
      this.dataPembayaran = new Data();
      // }
    }

   

    createPembayaran(dataPembayaran){
      // if (document.cookie=="") {
      //   window.location.href='./login';
      // }else{
      //   let x = document.forms["barangadd"]["KdBarang"].value;
      //   let y = document.forms["barangadd"]["NamaBarang"].value;
      //   let z = document.forms["barangadd"]["KdKategori"].value;
      //   let a = document.forms["barangadd"]["HargaSewa"].value;
      //   let b = document.forms["barangadd"]["StatusBarang"].value;
      //   let c = document.forms["barangadd"]["JumlahBarang"].value;
      //   let d = document.forms["barangadd"]["HargaDenda"].value;

      // if (x=="" || y=="" || z=="" || a=="" || b=="" || c=="" || d=="") {
      //   alert("data harus diisi semua")
      // }else{
        let header = new Headers({'Content-Type':'application/json'});
        let opsi = new RequestOptions({headers:header});
        let data = JSON.stringify(this.dataPembayaran);
        this.http.post('https://penyewaanbatch124.herokuapp.com/api/pembayaran',data,opsi)
        .subscribe((res:Response)=>{
          window.location.href='./pembayaran';
        })
      // }
      
    // }
  }
  }
  