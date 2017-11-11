import { Component, OnInit } from '@angular/core';
import { Http, Response, Request, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';
import { Data } from './rentformmodel';

@Component({
  selector: 'app-rentform',
  templateUrl: './rentform.component.html',
  styleUrls: ['./rentform.component.css']
})
export class RentformComponent implements OnInit {

  dataKategori: Object;
  dataBarang: any;
  dataRent: Data;
  idBarang: String;
  minDate1 : Date;
  minDate11 : String;
  transaksi : any;
  jmltransaksi : any;
  dataSewaKdBarang : any;
  today : Date;
  today_num : number;
  tglselesai : number;
  constructor(private http: Http, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.idBarang = params['id'];
    })
  }

  ngOnInit() {

    
    

    if (localStorage.getItem("username") == null) {
      alert("you must login first!");
      window.location.href = "./item/detail/" + this.idBarang;

    } else {
      this.dataRent = new Data();

      this.http.get('https://penyewaanbatch124.herokuapp.com/api/kategori')
        .subscribe((res: Response) => {
          this.dataKategori = res.json();
          console.log(this.dataKategori);
        })

      this.http.get('https://penyewaanbatch124.herokuapp.com/api/barang/' + this.idBarang)
        .subscribe((res: Response) => {
          this.dataBarang = res.json();

          if (this.dataBarang.JumlahBarang>0) {
            this.minDate1 = new Date();
            var dd = this.minDate1.getDate();
            if(dd<10){
              var ddstring = "0"+dd;
            } else{
              var ddstring = dd.toString();
            }
            var mm = this.minDate1.getMonth()+1;
            if(mm<10){
              var mmstring = "0"+mm;
            } else{
              var mmstring = mm.toString();
            }
            var yyyy = this.minDate1.getFullYear();
            this.minDate11 = yyyy+"-"+mmstring+"-"+ddstring;
            console.log(this.minDate1);
          }else{
            // belum jadi, buat penyewaan barang pada saat barang sudah di sewa, dibedain tgl penyewaannya
            // alert("get data sewa by kd barang, cari tgl selesai paling cepat")
            this.http.get('http://localhost:8889/api/datasewa/kdbarang/'+this.dataBarang.KdBarang)
            .subscribe((res: Response) => {
              this.dataSewaKdBarang = res.json();
              this.today = new Date();
              this.today_num = Date.parse(this.dataSewaKdBarang[0].TglSelesai.toString());
              for (var index = 0; index < this.dataSewaKdBarang.length; index++) {
                this.tglselesai = Date.parse(this.dataSewaKdBarang[index].TglSelesai.toString());

                if (this.today_num<this.tglselesai) {
                  this.today_num = this.today_num;
                }else{
                  this.today_num = this.tglselesai;
                }
                
              }
              var dd = new Date(this.today_num).getDate();
              if(dd<10){
                var ddstring = "0"+dd;
              } else{
                var ddstring = dd.toString();
              }
              var mm = this.minDate1.getMonth()+1;
              if(mm<10){
                var mmstring = "0"+mm;
              } else{
                var mmstring = mm.toString();
              }
              var yyyy = this.minDate1.getFullYear();
              this.minDate11 = yyyy+"-"+mmstring+"-"+ddstring;
              
            })

          }

          
        })
    }
    
  }

  setJumlah(){
    document.getElementById("jumlah").setAttribute("max",this.dataBarang.JumlahBarang);
  }
  setDate(tgl){
    console.log(tgl);
    document.getElementById("tanggalselesai").setAttribute("min",tgl);
    this.dataRent.TglSelesai = null;
  }



  rentCreate(dataRent, dataBarang) {
    dataRent.KdBarang = dataBarang.KdBarang;
    dataRent.StatusDataSewa = "booked";
    dataRent.UserNamePegawai = "";
    dataRent.UserNamePenyewa = localStorage.getItem("username");
    

    this.http.get('https://penyewaanbatch124.herokuapp.com/api/datasewa/search1/' + this.dataRent.UserNamePenyewa+'?token='+localStorage.getItem("token"))
    .subscribe((res: Response) => {
      this.transaksi = res.json();
      // console.log(this.dataSewaBook);
      this.jmltransaksi=this.transaksi.length+1;
      dataRent.KdDataSewa = "KDS"+dataRent.KdBarang+this.jmltransaksi+"-"+dataRent.UserNamePenyewa;
      debugger;

      if (dataRent.JumlahBarang==""||dataRent.JumlahBarang==null||dataRent.TglMulai==""||dataRent.TglMulai==null||dataRent.TglSelesai==""||dataRent.TglSelesai==null) {
        alert("all field must be filled");
        
      } else {
         if(dataBarang.JumlahBarang - dataRent.JumlahBarang<0){
           alert("insufficient stock")
         } else 
        if (dataRent.JumlahBarang<=0) {
          alert ("Number of Item must greater than 1")
        }else{
          dataBarang.JumlahBarang = dataBarang.JumlahBarang - dataRent.JumlahBarang;
          if(dataBarang.JumlahBarang==0){
            dataBarang.StatusBarang = "Out of Stock";
          }
          this.http.put('https://penyewaanbatch124.herokuapp.com/api/barang/' + dataBarang._id, dataBarang)
            .subscribe((res: Response) => {
    
            })
    
    
          let header = new Headers({ 'Content-Type': 'application/json' });
          let opsi = new RequestOptions({ headers: header });
          console.log(dataRent);
          debugger;
          this.http.post('https://penyewaanbatch124.herokuapp.com/api/datasewa?token='+localStorage.getItem("token"), JSON.stringify(dataRent), opsi)
            .subscribe((res: Response) => {
              alert("success book item!")
              debugger;
              window.location.href = "./item/detail/" + this.idBarang;
            })
            
          }
        }
       
    })
    
   

   
    
  }
}
