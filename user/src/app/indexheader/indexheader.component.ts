import { Component, OnInit } from '@angular/core';
import { Http, Response, Request, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router' ;
import { Data } from '../login/loginmodel';
import { DataRegister } from './registermodel';

@Component({
  selector: 'app-indexheader',
  templateUrl: './indexheader.component.html',
  styleUrls: ['./indexheader.component.css']
})
export class IndexheaderComponent implements OnInit {

  dataRegister:DataRegister;
  dataLogin:Data;
  textLogin : String;
  dataLogout : String;
  dataButton : String;
  usernamePenyewa : String;

  constructor(private http:Http) { }

  ngOnInit() {
      this.dataLogin= new Data();
      this.dataRegister = new DataRegister();
      if(localStorage.getItem("username")==null){
        document.getElementById("login").setAttribute("style","display:block");
        //document.getElementById("logout").setAttribute("style","display:none");
        document.getElementById("navbarDropdownMenuLink").setAttribute("style","display:none");
        
      } else{
        //document.getElementById("logout").setAttribute("style", "display:block");
        document.getElementById("login").setAttribute("style", "display:none");
        document.getElementById("navbarDropdownMenuLink").setAttribute("style","display:block");
        this.textLogin = localStorage.getItem("username");
      }
  }
  search(nama){
    window.location.href="/search/"+nama;
    
  }
  logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    window.location.href="./";
  }

   userLogin(dataLogin){
        
        let header = new Headers({'Content-Type':'application/json'});
        let opsi = new RequestOptions({headers:header});
        let data = JSON.stringify(this.dataLogin);
        
        this.http.post('https://penyewaanbatch124.herokuapp.com/api/login/authenticate',data,opsi)
        .subscribe((res:Response)=>{
          
          localStorage.setItem("token",res.json());
         debugger;
          if(res.json()[1]==null){
            debugger;
            alert("Wrong Username / Password");
            window.location.href='./';
          } else{
            alert("Login Success");
            localStorage.setItem("username",this.dataLogin.UserNamePenyewa)
            window.location.href='./';
          }
         
        },
      (err)=>alert("Wrong Username / Password"))
        
      }
  registerCreate(dataRegister){
    dataRegister.HakAkses = "penyewa";
    let header = new Headers({'Content-Type': 'application/json'});
    let opsi = new RequestOptions({headers : header});
    //let data = JSON.stringify({kdRegister : kode, NamaRegister : nama});

    if(dataRegister.NamaPenyewa==""||dataRegister.NamaPenyewa==null||dataRegister.AlamatPenyewa==""||dataRegister.AlamatPenyewa==null||dataRegister.EmailPenyewa==""||dataRegister.EmailPenyewa==null||dataRegister.NoTelp==""||dataRegister.NoTelp==null||dataRegister.UserNamePenyewa==""||dataRegister.UserNamePenyewa==null||dataRegister.PasswordPenyewa==""||dataRegister.PasswordPenyewa==null){
      alert("all field must be filled")
    } else{
      this.http.get('https://penyewaanbatch124.herokuapp.com/api/penyewa/search/' + dataRegister.UserNamePenyewa)
      .subscribe((res: Response) => {
        this.usernamePenyewa = res.json();
        if (this.usernamePenyewa == "" || this.usernamePenyewa == null) {
          this.http.post('https://penyewaanbatch124.herokuapp.com/api/penyewa/',JSON.stringify(dataRegister),opsi)
          .subscribe((res: Response) => {
          
            window.location.href="./";
          })
        
        }else {
          alert("username sudah ada")
        }
      })


      
    }
   
   
  }
}
