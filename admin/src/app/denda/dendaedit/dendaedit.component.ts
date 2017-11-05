import { Component, OnInit } from '@angular/core';
import { Http, Response, Request } from '@angular/http';
import { Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dendaedit',
  templateUrl: './dendaedit.component.html',
  styleUrls: ['./dendaedit.component.css']
})
export class DendaeditComponent implements OnInit {
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
      this.http.get('https://penyewaanbatch124.herokuapp.com/api/denda/'+this.id+'?token='+localStorage.getItem("token"))
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
    
      
        this.http.put('https://penyewaanbatch124.herokuapp.com/api/denda/'+this.id+'?token='+localStorage.getItem("token"),this.dataEdit)
        .subscribe((res:Response)=>{
         window.location.href='./denda';
         debugger;
        })
     
    // }
    }
  
  }
  