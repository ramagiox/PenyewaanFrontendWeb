import { Component, OnInit } from '@angular/core';
import { Http, Response, Request, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';
import { Data } from './barangaddModel';

@Component({
  selector: 'app-barangadd',
  templateUrl: './barangadd.component.html',
  styleUrls: ['./barangadd.component.css']
})
export class BarangaddComponent implements OnInit {
  dataBarang : Data;
  KategoriBarang : Object;
  kode : String;
  constructor(private http:Http, private route:ActivatedRoute) {  }
  
    ngOnInit() {
      // if (document.cookie=="") {
      //   window.location.href='./login';
      // }else{
        this.http.get('https://penyewaanbatch124.herokuapp.com/api/kategori')
        .subscribe((res:Response) =>{
          this.KategoriBarang=res.json()
        });
      this.dataBarang = new Data();
      // }
    }

    onSelect(kdkategori) {  
      this.dataBarang.KdKategori = kdkategori;  
  } 

    createBarang(dataBarang){
      // if (document.cookie=="") {
      //   window.location.href='./login';
      // }else{
      // let no_hp = document.forms["barangadd"]["HargaDenda"].value
      let number = /^[0-9]+$/;
      let x = document.forms["barangadd"]["KdBarang"].value;
      let y = document.forms["barangadd"]["NamaBarang"].value;
      let z = document.forms["barangadd"]["KdKategori"].value;
      let a = document.forms["barangadd"]["StatusBarang"].value;
      let b = document.forms["barangadd"]["HargaDenda"].value;
      let c = document.forms["barangadd"]["JumlahBarang"].value;
      let d = document.forms["barangadd"]["HargaSewa"].value;
     

       if (x=="" || y=="" || z=="" || a=="" || b=="" || c=="" || d=="" ||
            x==null || y==null || z==null ||a==null || b==null || c==null ||
            d==null) {
            alert("data harus diisi semua")
      }else if (!b.match(number) || !c.match(number) || !d.match(number)) {
          alert("harga denda, jumlah barang dan harga sewa harus angka")
      }else{
        this.http.get("http://localhost:8889/api/kdbarang/"+this.dataBarang.KdBarang)
        .subscribe((res:Response) => {
            this.kode = res.json();
            if(this.kode == ""){
              let header = new Headers({'Content-Type':'application/json'});
              let opsi = new RequestOptions({headers:header});
              let data = JSON.stringify(this.dataBarang);
              this.http.post('https://penyewaanbatch124.herokuapp.com/api/barang',data,opsi)
              .subscribe((res:Response)=>{
                window.location.href='./barang';
              })
            }else {
              alert("kode barang sudah ada")
            }
          });
        
      }
      
    // }
  }
  }
  