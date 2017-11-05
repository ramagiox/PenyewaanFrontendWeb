import { Component, OnInit } from '@angular/core';
import { Http, Response, Request, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';
import { Data } from './data-sewaaddModel';

@Component({
  selector: 'app-data-sewaadd',
  templateUrl: './data-sewaadd.component.html',
  styleUrls: ['./data-sewaadd.component.css']
})
export class DataSewaaddComponent implements OnInit {
  dataSewa : Data;

  constructor(private http:Http, private route:ActivatedRoute) {  }
  
    ngOnInit() {
      // if (document.cookie=="") {
      //   window.location.href='./login';
      // }else{
       
      this.dataSewa = new Data();
      // }
    }


    createDataSewa(dataSewa){
      // if (document.cookie=="") {
      //   window.location.href='./login';
      // }else{
        let x = document.forms["datasewaadd"]["KdDataSewa"].value;
        let y = document.forms["datasewaadd"]["UserNamePegawai"].value;
        let z = document.forms["datasewaadd"]["UserNamePenyewa"].value;
        let a = document.forms["datasewaadd"]["KdBarang"].value;
        let b = document.forms["datasewaadd"]["StatusDataSewa"].value;
        let c = document.forms["datasewaadd"]["TglMulai"].value;
        let d = document.forms["datasewaadd"]["TglSelesai"].value;
        let e = document.forms["datasewaadd"]["JumlahBarang"].value;

      if (x=="" || y=="" || z=="" || a=="" || b=="" || c=="" || d=="" || e=="") {
        alert("data harus diisi semua")
      }else{
        let header = new Headers({'Content-Type':'application/json'});
        let opsi = new RequestOptions({headers:header});
        let data = JSON.stringify(this.dataSewa);
        this.http.post('https://penyewaanbatch124.herokuapp.com/api/datasewa?token='+localStorage.getItem("token"),data,opsi)
        .subscribe((res:Response)=>{
          window.location.href='./datasewa';
        })
      }
      
    // }
  }
  }
  