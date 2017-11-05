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
  kode : String;
  UserNamePegawai : String;
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
        let x = document.forms["pegawaiadd"]["UserNamePegawai"].value;
        let y = document.forms["pegawaiadd"]["PasswordPegawai"].value;
        let z = document.forms["pegawaiadd"]["NamaPegawai"].value;
        let a = document.forms["pegawaiadd"]["AlamatPegawai"].value;
        let b = document.forms["pegawaiadd"]["NoTelp"].value;
        let number = /^[0-9]+$/;
        let re = /^\w+$/;
       

      if (x=="" || y=="" || z=="" || a=="") {
        alert("data harus diisi semua")
      }else if (!x.match(re)) {
        alert("username hanya boleh berisi huruf, angka dan underscores (_)");
      }else if (y.length < 6) {
        alert("password minimal 6 karakter");
      }else if (!b.match(number)) {
        alert("No Telp harus angka")
      }else if (b.length!=12) {
        alert("No Telp harus 12 digit")
      
    }else{

      this.http.get("https://penyewaanbatch124.herokuapp.com/api/username/"+dataPegawai.UserNamePegawai)
      .subscribe((res:Response) => {
          this.kode = res.json();
          if (this.kode=="") {
            let header = new Headers({'Content-Type':'application/json'});
            let opsi = new RequestOptions({headers:header});
            let data = JSON.stringify(this.dataPegawai);
            this.http.post('https://penyewaanbatch124.herokuapp.com/api/pegawai',data,opsi)
            .subscribe((res:Response)=>{
              window.location.href='./pegawai';
            })
          }else {
            alert('username sudah ada');  
          }
       
      })
    
    // }
  }
  }
}

  