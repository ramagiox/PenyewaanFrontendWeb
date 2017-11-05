import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  dataBarang : Object;
  namaBarang ; String;

  constructor(private http: Http, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.namaBarang = params['id'];
      this.dataBarang = []
     })
   }

  ngOnInit() {
   
    this.http.get('https://penyewaanbatch124.herokuapp.com/api/search/'+this.namaBarang)
    .subscribe((res: Response) => {
      this.dataBarang = res.json();
      console.log(this.dataBarang);
    })
    debugger;
  }


}
