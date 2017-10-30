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
    pegawaiEdit(id){
      // if (document.cookie=="") {
      //   window.location.href='./login';
      // }else{
    
      
        this.http.put('https://penyewaanbatch124.herokuapp.com/api/pegawai/'+this.id,this.dataEdit)
        .subscribe((res:Response)=>{
         window.location.href='./pegawai';
         debugger;
        })
     
    // }
    }
  
  }
  