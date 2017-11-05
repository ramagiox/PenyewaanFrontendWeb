import { Component, OnInit } from '@angular/core';
import { Http, Response, Request, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';
import * as $ from 'jquery';
import 'datatables.net';
import { Data } from './penyewaadd/penyewaaddModel';

@Component({
  selector: 'app-penyewa',
  templateUrl: './penyewa.component.html',
  styleUrls: ['./penyewa.component.css']
})
export class PenyewaComponent implements OnInit {
  dataPenyewa:Object;
  id:String;
  dataDetail : Object;
  dataEdit : Object;
  dataPenyewaTambah: Data;
  usernamePenyewa : String;
  
  
  constructor(private http:Http, private route:ActivatedRoute) {
    this.route.params.subscribe(params =>{
      this.id=params['id'];
    })
   }
    ngOnInit() {
      //document.cookie="token=";
      //document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      //debugger;
  
      // if (document.cookie=="") {
      //   window.location.href='./login';
      // }else{
        this.http.get('https://penyewaanbatch124.herokuapp.com/api/penyewa')
        .subscribe((res:Response) =>{
          this.dataPenyewa=res.json()
          $(document).ready(function(){
            $('#penyewa').DataTable();
        })
        
        });
      // }
      
    }
  
    penyewaDetailModal(id){
    
        
        this.http.get('https://penyewaanbatch124.herokuapp.com/api/penyewa/'+id)
        .subscribe((res:Response)=>{
          this.dataDetail = res.json();
          this.dataEdit=res.json();
        });
      
    }

    penyewaEdit(id,dataEdit){
      // if (document.cookie=="") {
      //   window.location.href='./login';
      // }else{

        let x = dataEdit.UserNamePenyewa;
        let y = dataEdit.PasswordPenyewa;
        let z = dataEdit.NamaPenyewa;
        let a = dataEdit.EmailPenyewa;
        let b = dataEdit.AlamatPenyewa;
        let c = dataEdit.NoTelp;
        let atpos = a.indexOf("@");
        let dotpos = a.lastIndexOf(".");
        let number = /^[0-9]+$/;
        debugger;


      
     

      if (x=="" || y=="" || z=="" || a=="" || b=="" || c=="" ||
        x==null || y==null || z==null || a==null || b==null || c==null ) {
        alert("data harus diisi semua")
        }else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=a.length) {
          alert("alamat email salah");
        }else if (!c.match(number)) {
          alert("no telp harus angka");
        }else if (c.length!=12) {
          alert("no telp harus 12 digit")
        
        }else{    
      
          
        this.http.put('https://penyewaanbatch124.herokuapp.com/api/penyewa/'+id,dataEdit)
        .subscribe((res:Response)=>{
         window.location.href='./penyewa';
         debugger;
        })
      }
    // }
    }

    tambahPenyewa(){
      this.dataPenyewaTambah = new Data();
    
    }

    createPenyewa(dataPenyewaTambah){
      // if (document.cookie=="") {
      //   window.location.href='./login';
      // }else{
        let x = document.forms["penyewaadd"]["UserNamePenyewa"].value;
        let y = document.forms["penyewaadd"]["PasswordPenyewa"].value;
        let z = document.forms["penyewaadd"]["NamaPenyewa"].value;
        let a = document.forms["penyewaadd"]["EmailPenyewa"].value;
        let b = document.forms["penyewaadd"]["AlamatPenyewa"].value;
        let c = document.forms["penyewaadd"]["NoTelp"].value;
        let atpos = a.indexOf("@");
        let dotpos = a.lastIndexOf(".");
        let number = /^[0-9]+$/;
        let re = /^\w+$/;
        debugger;
      
     

      if (x=="" || y=="" || z=="" || a=="" || b=="" || c=="" ||
        x==null || y==null || z==null || a==null || b==null || c==null ) {
        alert("data harus diisi semua")
        }else if (!x.match(re)) {
          alert("username hanya boleh berisi huruf, angka dan underscores (_)");
        }else if (y.length < 6) {
          alert("password minimal 6 karakter");
        }else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=a.length) {
          alert("alamat email salah");
        }else if (!c.match(number)) {
          alert("no telp harus angka");
        }else if (c.length!=12) {
          alert("no telp harus 12 digit")
        
        }else{

          this.http.get('https://penyewaanbatch124.herokuapp.com/api/penyewa/search/'+dataPenyewaTambah.UserNamePenyewa)
          .subscribe((res:Response)=>{
            this.usernamePenyewa = res.json();
            if (this.usernamePenyewa=="") {
              
              let header = new Headers({'Content-Type':'application/json'});
              let opsi = new RequestOptions({headers:header});
              let data = JSON.stringify(this.dataPenyewaTambah);
              this.http.post('https://penyewaanbatch124.herokuapp.com/api/penyewa',data,opsi)
              .subscribe((res:Response)=>{
                window.location.href='./penyewa';
              })
            }else {
              alert("username sudah ada")
            }
          
          });
        
      }
      
    // }
  }

    penyewaDelete(id){
      if (confirm("apakah anda yakin akan menghapus data ini ?")==true) {
      this.http.delete('https://penyewaanbatch124.herokuapp.com/api/penyewa/'+id)
      .subscribe((res:Response)=>{
        window.location.href='./penyewa';
  
      })
    }else{
      
    }
    }
  
  }
  

