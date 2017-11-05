import { Component, OnInit } from '@angular/core';
import { Http, Response, Request, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router' ;
import { Data } from './loginmodel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  dataLogin:Data;
  
    constructor(private http:Http) { }
    
      ngOnInit() {
        this.dataLogin= new Data();
        document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      }
        
      
      userLogin(dataLogin){
        
       
      }

}
