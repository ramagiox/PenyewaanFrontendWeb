import { Component, OnInit } from '@angular/core';
import { Http, Response, Request } from '@angular/http';
import { Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-akunedit',
  templateUrl: './akunedit.component.html',
  styleUrls: ['./akunedit.component.css']
})
export class AkuneditComponent implements OnInit {
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
      this.http.get('https://penyewaanbatch124.herokuapp.com/api/akun/'+this.id)
      .subscribe((res:Response)=>{
        this.dataEdit=res.json();
        debugger;
      })

    // }
    }
    akunEdit(id){
      // if (document.cookie=="") {
      //   window.location.href='./login';
      // }else{
    
      
        this.http.put('https://penyewaanbatch124.herokuapp.com/api/akun/'+this.id,this.dataEdit)
        .subscribe((res:Response)=>{
         window.location.href='./akun';
         debugger;
        })
     
    // }
    }
  
  }
  