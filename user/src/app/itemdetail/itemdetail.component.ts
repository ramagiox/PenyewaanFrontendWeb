import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';

@Component({
  selector: 'app-itemdetail',
  templateUrl: './itemdetail.component.html',
  styleUrls: ['./itemdetail.component.css']
})
export class ItemdetailComponent implements OnInit {

  dataKategori: Object;
  dataBarang : any;

  idBarang: String;
  constructor(private http: Http, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.idBarang = params['id'];
     })
   }

  ngOnInit() {
    this.http.get('https://penyewaanbatch124.herokuapp.com/api/kategori')
    .subscribe((res: Response) => {
      this.dataKategori = res.json();
      console.log(this.dataKategori);
    })

    this.http.get('https://penyewaanbatch124.herokuapp.com/api/barang/'+this.idBarang)
    .subscribe((res: Response) => {
      this.dataBarang = res.json();
      console.log(this.dataBarang);
      if(this.dataBarang.JumlahBarang==0){
        this.dataBarang.StatusBarang="out of stock"
      }
    })
  }

  cekBarang(){
    if(this.dataBarang.JumlahBarang==0){
      alert("out of stock")
    }else{
      window.location.href = "./item/rent/"+this.dataBarang._id;
      debugger;
    }
  }

  cariKategori(kdkategori){
    
        this.http.get('https://penyewaanbatch124.herokuapp.com/api/barang/kdkategori/'+kdkategori)
        .subscribe((res: Response) => {
          this.dataBarang = res.json();
          console.log(this.dataBarang);
          window.location.href = ""
        })
    
      }

}
