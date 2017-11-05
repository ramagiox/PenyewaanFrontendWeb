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
    if (localStorage.getItem("token")=="" || localStorage.getItem("token")==null) {
        document.getElementById("login").setAttribute("style","display:block")
        document.getElementById("logout").setAttribute("style","display:none")
      }else{
        document.getElementById("login").setAttribute("style","display:none")
        document.getElementById("logout").setAttribute("style","display:block")
      }
  }

  logout(){
    // if (document.cookie=="") {
    //   window.location.href='./login';
        
      // }else{
        if (confirm("yakin mau keluar ?")==true){
          localStorage.removeItem("token");
          window.location.href='./';
        }else{
          
        }
        
      // }
  }

}
