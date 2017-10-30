import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indexsidebar',
  templateUrl: './indexsidebar.component.html',
  styleUrls: ['./indexsidebar.component.css']
})
export class IndexsidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    

  }

  logout(){
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    window.location.href='./';
  }

}
