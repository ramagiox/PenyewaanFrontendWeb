import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  dataKategori: Object;
  dataBarang : Object;
  dataKategoriBarang : Object; 

  constructor(private http:Http) { }

  ngOnInit() {
    this.http.get('https://penyewaanbatch124.herokuapp.com/api/kategori')
    .subscribe((res: Response) => {
      this.dataKategori = res.json();
      console.log(this.dataKategori);
    })

    this.http.get('https://penyewaanbatch124.herokuapp.com/api/barang')
    .subscribe((res: Response) => {
      this.dataBarang = res.json();
      console.log(this.dataBarang);
    })
  }

  cariKategori(kdkategori){

    this.http.get('https://penyewaanbatch124.herokuapp.com/api/barang/kdkategori/'+kdkategori)
    .subscribe((res: Response) => {
      this.dataBarang = res.json();
      console.log(this.dataBarang);
    })

  }

}
