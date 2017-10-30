import { Component, OnInit } from '@angular/core';
import { Http, Response, Request, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';
import { Data } from './pegawaiaddModel';

@Component({
  selector: 'app-pegawaiadd',
  templateUrl: './pegawaiadd.component.html',
  styleUrls: ['./pegawaiadd.component.css']
})
export class PegawaiaddComponent implements OnInit {
  dataPegawai: Data;
  KategoriBarang : Object;
  constructor(private http:Http, private route:ActivatedRoute) {  }
  
    ngOnInit() {
      // if (document.cookie=="") {
      //   window.location.href='./login';
      // }else{
       
      this.dataPegawai = new Data();
      // }
    }

   

    createPegawai(dataPegawai){
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
        let data = JSON.stringify(this.dataPegawai);
        this.http.post('https://penyewaanbatch124.herokuapp.com/api/pegawai',data,opsi)
        .subscribe((res:Response)=>{
          window.location.href='./pegawai';
        })
      // }
      
    // }
  }
  }
  