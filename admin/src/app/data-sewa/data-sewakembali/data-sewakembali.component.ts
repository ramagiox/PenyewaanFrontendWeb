import { Component, OnInit } from '@angular/core';
import { Http, Response, Request, RequestOptions, Headers } from '@angular/http';
import { Routes, ActivatedRoute } from '@angular/router';
import { Data } from './data-sewakembaliModel';

@Component({
  selector: 'app-data-sewakembali',
  templateUrl: './data-sewakembali.component.html',
  styleUrls: ['./data-sewakembali.component.css']
})
export class DataSewakembaliComponent implements OnInit {

  id: String;
  idBarang : String;
  dataDetail: any;
  dataBarang : any;
  today: Date;
  denda: number;
  tanggal : Date;
  dataDenda : Data

  constructor(private http: Http, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })
  }

  ngOnInit() {
    // if (document.cookie=="") {
    //   window.location.href='./login';
    // }else{
    this.dataDenda = new Data();
    this.today = new Date();
    this.id;
    this.http.get('https://penyewaanbatch124.herokuapp.com/api/datasewa/' + this.id+'?token='+localStorage.getItem("token"))
      .subscribe((res: Response) => {
        this.dataDetail = res.json();
        this.tanggal = this.dataDetail.TglSelesai;
        console.log(this.dataDetail.KdBarang);
        this.http.get('https://penyewaanbatch124.herokuapp.com/api/kdbarang/' + this.dataDetail.KdBarang)
        .subscribe((res: Response) => {
          this.dataBarang = res.json();
          console.log(this.dataBarang);
          this.idBarang = this.dataBarang[0]._id;
          if (this.today > new Date(this.tanggal)) {
            //this.timeDiff = Math.abs(this.today.getTime() - this.dataPenyewa[0].TglSelesai.getTime());
            //this.diffDays = Math.ceil(this.timeDiff / (1000 * 3600 * 24));
            this.denda = this.dataDetail.JumlahBarang *this.dataBarang[0].HargaDenda * Math.floor((Date.parse(this.today.toString()) - Date.parse(this.tanggal.toString())) / 86400000);
            console.log("denda : " + this.denda);
          }
        })
      })
  }

  datasewaKembali(id){
    this.dataDenda.KdDenda="";
    this.dataDenda.KdDataSewa=this.dataDetail.KdDataSewa;
    this.dataDenda.KdBarang=this.dataBarang[0].KdBarang;
    this.dataDenda.JumlahDenda= this.denda;
    
    this.dataDenda.StatusDenda="Lunas";
    let header = new Headers({'Content-Type':'application/json'});
    let opsi = new RequestOptions({headers:header});
    let data = JSON.stringify(this.dataDenda);
    
    if(this.dataDenda.JumlahDenda>0){
    this.http.post('https://penyewaanbatch124.herokuapp.com/api/denda?token='+localStorage.getItem("token"),data,opsi)
    .subscribe((res:Response)=>{
      window.location.href='./datasewa';
    })}

    this.dataDetail.StatusDataSewa = "selesai";
    this.http.put('https://penyewaanbatch124.herokuapp.com/api/datasewa/'+this.id+'?token='+localStorage.getItem("token"),this.dataDetail)
    .subscribe((res:Response)=>{
     window.location.href='./datasewa';
     
    })

    this.dataBarang[0].JumlahBarang = this.dataBarang[0].JumlahBarang+this.dataDetail.JumlahBarang;
    this.dataBarang[0].StatusBarang = "Available"
    console.log(this.idBarang);
    debugger;
    this.http.put('https://penyewaanbatch124.herokuapp.com/api/barang/'+this.idBarang,this.dataBarang[0])
    .subscribe((res:Response)=>{
     window.location.href='./datasewa';
     
    })

  }
}



