import { Component, OnInit } from '@angular/core';
import { Http, Response, Request } from '@angular/http';
import { Routes, ActivatedRoute } from '@angular/router';
import { Data } from '../perawatan-diagnosaadd/perawatan-diagnosaaddModel';

@Component({
  selector: 'app-perawatan-diagnosaedit',
  templateUrl: './perawatan-diagnosaedit.component.html',
  styleUrls: ['./perawatan-diagnosaedit.component.css']
})
export class PerawatanDiagnosaeditComponent implements OnInit {
  dataEdit : Object;
  id:String;
  dataPerawatDiagnosa : Data;
  
    constructor(private http:Http, private route:ActivatedRoute) {
      this.route.params.subscribe(params =>{
        this.id=params['id'];
      })
     }
  
    ngOnInit() {
      if (document.cookie=="") {
        window.location.href='./login';
      }else{

      this.id;
      this.http.get('https://rsegi.herokuapp.com/api/perawatandiagnosa/'+this.id+'?'+document.cookie)
      .subscribe((res:Response)=>{
        this.dataEdit=res.json();
      })
      this.dataPerawatDiagnosa = new Data();
    }
  }
    perawatanEdit(id){

      if (document.cookie=="") {
        window.location.href='./login';
      }else{
      
        this.http.put('https://rsegi.herokuapp.com/api/perawatandiagnosa/'+id+'?'+document.cookie,this.dataEdit)
        .subscribe((res:Response)=>{
         window.location.href='./perawatandiagnosa';
  
       })
      }
    }
  
  }
  