import { Component, OnInit } from '@angular/core';
import { Http, Response, Request } from '@angular/http';
import { Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-data-sewaedit',
  templateUrl: './data-sewaedit.component.html',
  styleUrls: ['./data-sewaedit.component.css']
})
export class DataSewaeditComponent implements OnInit {
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
      this.http.get('https://penyewaanbatch124.herokuapp.com/api/datasewa/'+this.id+'?token='+localStorage.getItem("token"))
      .subscribe((res:Response)=>{
        this.dataEdit=res.json();
        debugger;
      })

    

    // }
    }
    datasewaEdit(id){
      // if (document.cookie=="") {
      //   window.location.href='./login';
      // }else{
    
      
        this.http.put('https://penyewaanbatch124.herokuapp.com/api/datasewa/'+this.id+'?token='+localStorage.getItem("token"),this.dataEdit)
        .subscribe((res:Response)=>{
         window.location.href='./datasewa';
         debugger;
        })
     
    // }
    }
  
  }
  