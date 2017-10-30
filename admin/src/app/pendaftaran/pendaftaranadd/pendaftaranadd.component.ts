import { Component, OnInit } from '@angular/core';
import { Http, Response, Request, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';
import { Data } from './pendaftaranModel';

@Component({
  selector: 'app-pendaftaranadd',
  templateUrl: './pendaftaranadd.component.html',
  styleUrls: ['./pendaftaranadd.component.css']
})
export class PendaftaranaddComponent implements OnInit {
  dataPendaftaran : Data;
  constructor(private http:Http, private route:ActivatedRoute) {  }
  
    ngOnInit() {
      // if (document.cookie=="") {
      //   window.location.href='./login';
      // }else{
      this.dataPendaftaran = new Data();
      // }
    }
    createPendaftaran(dataPerawatDiagnosa){
      // if (document.cookie=="") {
      //   window.location.href='./login';
      // }else{
        let x = document.forms["pendaftaranadd"]["KdPendaftaran"].value;
        let y = document.forms["pendaftaranadd"]["KdPasien"].value;
        let z = document.forms["pendaftaranadd"]["KdRumahSakit"].value;
        let a = document.forms["pendaftaranadd"]["KdRuangDiagnosa"].value;
        let b = document.forms["pendaftaranadd"]["TglPendaftaran"].value;
        let c = document.forms["pendaftaranadd"]["DosisObat"].value;

      if (x=="" || y=="" || z=="" || a=="" || b=="" || c=="") {
        alert("data harus diisi semua")
      }else{
        let header = new Headers({'Content-Type':'application/json'});
        let opsi = new RequestOptions({headers:header});
        let data = JSON.stringify(this.dataPendaftaran);
        this.http.post('https://rsegi.herokuapp.com/api/pendaftaran?'+document.cookie,data,opsi)
        .subscribe((res:Response)=>{
          window.location.href='./pendaftaran';
        })
      }
      
    // }
  }
  }
  