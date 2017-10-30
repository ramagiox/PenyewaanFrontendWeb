import { Component, OnInit } from '@angular/core';
import { Http, Response, Request } from '@angular/http';
import { Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perawatanedit',
  templateUrl: './perawatanedit.component.html',
  styleUrls: ['./perawatanedit.component.css']
})
export class PerawataneditComponent implements OnInit {
  dataEdit : Object;
  id:String;
  
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
      this.http.get('https://rsegi.herokuapp.com/api/perawatan/'+this.id+'?'+document.cookie)
      .subscribe((res:Response)=>{
        this.dataEdit=res.json();
      })
    }
  
    }
    perawatanEdit(id){
      if (document.cookie=="") {
        window.location.href='./login';
      }else{
       this.http.put('https://rsegi.herokuapp.com/api/perawatan/'+this.id+'?'+document.cookie,this.dataEdit)
        .subscribe((res:Response)=>{
         window.location.href='./perawatan';
  
       })
      }
    }
  
  }
  