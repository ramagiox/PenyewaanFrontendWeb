import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private router : Router){
  };
  myimage="https://upload.wikimedia.org/wikipedia/id/5/50/Isyana_sarasvati_explore.jpeg";
}
