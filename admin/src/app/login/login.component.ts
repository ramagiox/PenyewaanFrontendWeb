import { Component, OnInit } from '@angular/core';
import { Http, Response, Request, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router' ;
import { Data } from './loginModel';

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
      //document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
     
    }
      
    
    userLogin(dataLogin){
      let x = document.forms["inputlogin"]["UserName"].value;
      let y = document.forms["inputlogin"]["Password"].value;
      let re = /^\w+$/;
      if (x == "" || y=="") {
        alert("username dan password harus diisi");
    }else if (!re.test(x)) {
      alert("Error: Username must contain only letters, numbers and underscores!");
    }else if (y.length < 6) {
      alert("Error: Password must contain at least six characters!");
    }else{
     
        let header = new Headers({'Content-Type':'application/json'});
        let opsi = new RequestOptions({headers:header});
        let data = JSON.stringify(this.dataLogin);
        this.http.post('https://rsegi.herokuapp.com/api/login/authenticate/',data,opsi)
        .subscribe((res:Response)=>{
          document.cookie = "token="+res.json().token;
          window.location.href='./';
          debugger;
        })
      }
    }
  
  }