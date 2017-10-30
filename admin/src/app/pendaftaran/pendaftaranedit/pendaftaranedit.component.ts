import { Component, OnInit } from '@angular/core';
import { Http, Response, Request } from '@angular/http';
import { Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pendaftaranedit',
  templateUrl: './pendaftaranedit.component.html',
  styleUrls: ['./pendaftaranedit.component.css']
})
export class PendaftaraneditComponent implements OnInit {
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
      this.http.get('https://rsegi.herokuapp.com/api/pendaftaran/'+this.id+'?'+document.cookie)
      .subscribe((res:Response)=>{
        this.dataEdit=res.json();
      })
    // }
    }
    pendaftaranEdit(id){
      // if (document.cookie=="") {
      //   window.location.href='./login';
      // }else{
        let x = document.forms["pendaftaranedit"]["KdPendaftaran"].value;
        let y = document.forms["pendaftaranedit"]["KdPasien"].value;
        let z = document.forms["pendaftaranedit"]["KdRumahSakit"].value;
        let a = document.forms["pendaftaranedit"]["KdRuangDiagnosa"].value;
        let b = document.forms["pendaftaranedit"]["TglPendaftaran"].value;
        let c = document.forms["pendaftaranedit"]["DosisObat"].value;
        debugger;
      if (x=="" || y=="" || z=="" || a=="" || b=="" || c=="") {
        alert("data harus diisi semua")
      }else{
      
        this.http.put('https://rsegi.herokuapp.com/api/pendaftaran/'+this.id+'?'+document.cookie,this.dataEdit)
        .subscribe((res:Response)=>{
         window.location.href='./pendaftaran';
        })
      }
    // }
      
       
  
       
    
    }
  
  }
  