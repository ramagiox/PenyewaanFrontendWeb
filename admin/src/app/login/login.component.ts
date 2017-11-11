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
    }else{
     
        let header = new Headers({'Content-Type':'application/json'});
        let opsi = new RequestOptions({headers:header});
        let data = JSON.stringify(this.dataLogin);
        this.http.post('https://penyewaanbatch124.herokuapp.com/api/login/pegawai/authenticate/',data,opsi)
        .subscribe((res:Response)=>{
          localStorage.setItem("token",res.json());
          localStorage.setItem("username",this.dataLogin.UserNamePegawai)
          console.log(localStorage.getItem("token"))
          if (localStorage.token=="") {
            alert("username / password salah")
            
          }else{
            window.location.href='./';
          }
          
          debugger;
        },
      (err)=>alert("username / password salah"))
      }
    }
  
  }