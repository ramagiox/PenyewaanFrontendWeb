import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indexheader',
  templateUrl: './indexheader.component.html',
  styleUrls: ['./indexheader.component.css']
})
export class IndexheaderComponent implements OnInit {
loginout:String
  constructor() { }

  ngOnInit() {
    if (document.cookie=="") {
      this.loginout = "Login atau Daftar"
        
      }else{
        this.loginout = "Logout"
      }
  }

  logout(){
    if (document.cookie=="") {
      window.location.href='./login';
        
      }else{
        if (confirm("yakin mau keluar ?")==true){
          document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
          window.location.href='./';
        }else{
          
        }
        
      }
  }

}
