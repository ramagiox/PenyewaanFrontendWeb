import { Component, OnInit } from '@angular/core';
import { Http, Response, Request } from '@angular/http';
import { Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pegawaiedit',
  templateUrl: './pegawaiedit.component.html',
  styleUrls: ['./pegawaiedit.component.css']
})
export class PegawaieditComponent implements OnInit {
  dataEdit : Object;
  id:String;
  
    constructor(private http:Http, private route:ActivatedRoute) {
      this.route.params.subscribe(params =>{
        this.id=params['id'];
      })
     }
  
    ngOnInit() {
      // if (document.cookie=="") {
      //   window.location.href='./login';
      // }else{
      this.id;
      this.http.get('https://penyewaanbatch124.herokuapp.com/api/pegawai/'+this.id)
      .subscribe((res:Response)=>{
        this.dataEdit=res.json();
        debugger;
      })

    // }
    }
    pegawaiEdit(id,dataEdit){
      // if (document.cookie=="") {
      //   window.location.href='./login';
      // }else{
    
        let x = dataEdit.UserNamePegawai;
        let y = dataEdit.PasswordPegawai;
        let z = dataEdit.NamaPegawai;
        let a = dataEdit.AlamatPegawai;
        let b = dataEdit.NoTelp;
        let number = /^[0-9]+$/;
        let re = /^\w+$/;

        if (x=="" || y=="" || z=="" || a=="" || b=="") {
          alert("data harus diisi semua")
        }else if (!re.test(x)) {
          alert("username hanya boleh berisi huruf, angka dan underscores (_)");
        }else if (y.length < 6) {
          alert("password minimal 6 karakter");
        }else if (!number.test(b)) {
          alert("No Telp harus angka")
        }else if (b.length!=12) {
          alert("No Telp harus 12 digit")
        
      }else{
        this.http.put('https://penyewaanbatch124.herokuapp.com/api/pegawai/'+id,dataEdit)
        .subscribe((res:Response)=>{
         window.location.href='./pegawai';
         debugger;
        })

      }
      
        
     
    // }
    }
  
  }
  