import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indexsidebar',
  templateUrl: './indexsidebar.component.html',
  styleUrls: ['./indexsidebar.component.css']
})
export class IndexsidebarComponent implements OnInit {
 
  constructor() {

   }

  ngOnInit() {
    if(localStorage.getItem("token")==""||localStorage.getItem("token")==null){
      document.getElementById("sideul").setAttribute("style","display:none");
    } else{
      document.getElementById("sideul").setAttribute("style","display:block");
    }
   
  }

  logout(){
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    window.location.href='./';
  }

}
