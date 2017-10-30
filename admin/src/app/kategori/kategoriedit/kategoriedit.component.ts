import { Component, OnInit } from '@angular/core';
import { Http, Response, Request } from '@angular/http';
import { Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-kategoriedit',
  templateUrl: './kategoriedit.component.html',
  styleUrls: ['./kategoriedit.component.css']
})
export class KategorieditComponent implements OnInit {
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
      this.http.get('https://penyewaanbatch124.herokuapp.com/api/kategori/'+this.id)
      .subscribe((res:Response)=>{
        this.dataEdit=res.json();
        debugger;
      })

    // }
    }
    kategoriEdit(id){
      // if (document.cookie=="") {
      //   window.location.href='./login';
      // }else{
    
      
        this.http.put('https://penyewaanbatch124.herokuapp.com/api/kategori/'+this.id,this.dataEdit)
        .subscribe((res:Response)=>{
         window.location.href='./kategori';
         debugger;
        })
     
    // }
    }
  
  }
  