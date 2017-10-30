import { Component, OnInit } from '@angular/core';
import { Http, Response, Request } from '@angular/http';
import { Routes, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-provinsiedit',
  templateUrl: './provinsiedit.component.html',
  styleUrls: ['./provinsiedit.component.css']
})
export class ProvinsieditComponent implements OnInit {
dataEdit : Object;
id:String;

  constructor(private http:Http, private route:ActivatedRoute) {
    this.route.params.subscribe(params =>{
      this.id=params['id'];
    })
   }

  ngOnInit() {
    this.id;
    this.http.get('http://localhost:8889/api/provinsi/'+this.id+'?'+document.cookie)
    .subscribe((res:Response)=>{
      this.dataEdit=res.json();
    })

  }
  provinsiEdit(id){
  
     this.http.put('http://localhost:8889/api/provinsi/'+this.id+'?'+document.cookie,this.dataEdit)
      .subscribe((res:Response)=>{
       window.location.href='./provinsi';

     })
  }

}
