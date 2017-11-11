import { Component, OnInit } from '@angular/core';
import { Http, Response, Request, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';
import * as $ from 'jquery';
import 'datatables.net'
import { Data } from '../pembayaran/pembayaranadd/pembayaranaddModel';

@Component({
  selector: 'app-data-sewa',
  templateUrl: './data-sewa.component.html',
  styleUrls: ['./data-sewa.component.css']
})
export class DataSewaComponent implements OnInit {
  dataSewa: any;
  id: String;
  KdSewa: String;
  dataBarang: any;
  dataBarangUpdate: any;
  dataDetail: any;
  tanggalmulai: Date;
  tanggalselesai: Date;
  harga: number;
  dataUpdate: any;
  dataPembayaran: Data;
  idBarang: any;
  today: Date;
  dataSewaDetail: any;
  cek: true;
  tgl : Date;
  tglnow:any;
  tgl_mulai : any;


  public temp_var: Object = false;


  constructor(private http: Http, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })
    this.dataBarangUpdate = [];
  }

  ngOnInit() {
    //document.cookie="token=";
    //document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    //debugger;

    // if (document.cookie=="") {
    //   window.location.href='./login';
    // }else{


    this.http.get('https://penyewaanbatch124.herokuapp.com/api/datasewafull?token=' + localStorage.getItem("token"))
      .subscribe((res: Response) => {
        this.dataSewa = res.json();
        // this.dataSewa.KdDataSewa = 'KDS'+this.dataSewa.KdBarang+this.dataSewa.UserNamePenyewa;
        this.temp_var = true;
        this.today = new Date();
        for (var index = 0; index < this.dataSewa.length; index++) {
          if (this.dataSewa[index].StatusDataSewa == "aktif" && new Date(this.dataSewa[index].TglSelesai) < this.today) {
            console.log("masuk sini")

            console.log(this.dataSewa[index]._id)
            this.http.get('https://penyewaanbatch124.herokuapp.com/api/datasewa/' + this.dataSewa[index]._id + '?token=' + localStorage.getItem("token"))
              .subscribe((res: Response) => {
                this.dataSewaDetail = res.json();
                this.dataSewaDetail.StatusDataSewa = "late"
                this.http.put('https://penyewaanbatch124.herokuapp.com/api/datasewa/' + this.dataSewaDetail._id + '?token=' + localStorage.getItem("token"), this.dataSewaDetail)
                  .subscribe((res: Response) => {
                    //  window.location.href='./datasewa';

                  })

              })


          }

        }

        $(document).ready(function () {
          $('#example').DataTable({
            "lengthMenu": [[5, 10, 20, -1],[5, 10, 20, "All"]],
            "iDisplayLength": 10
          });

        })
      });
    // } 
  }

  datasewaDelete(id) {
    if (confirm("apakah anda yakin akan menghapus data ini ?") == true) {
      this.http.delete('https://penyewaanbatch124.herokuapp.com/api/datasewa/' + id + '?token=' + localStorage.getItem("token"))
        .subscribe((res: Response) => {
          window.location.href = './datasewa';
        })
    } else {
    }
  }

  konfPembayaran(id, kdbarang, statusdatasewa, tglmulai) {
this.tgl = new Date();
this.tglnow= Math.floor(Date.parse(this.tgl.toString())/86400000)
this.tgl_mulai= Math.floor(Date.parse(tglmulai.toString())/86400000)


    console.log(tglmulai)
    console.log(this.tgl_mulai)
    console.log(this.tgl)
    console.log(this.tglnow)
debugger;
    if (statusdatasewa == "booked") {

      if (this.tgl_mulai>this.tglnow) {
         
        alert("belum waktunya");
  
        
      }else if (this.tgl_mulai<this.tglnow) {
        alert("kelewat")
      }else{
        this.cek = true;
        
     
          this.http.get('https://penyewaanbatch124.herokuapp.com/api/datasewa/' + id + '?token=' + localStorage.getItem("token"))
          .subscribe((res: Response) => {
          //  document.getElementById("cobakonfpembayaran").dataset.datatoggle = 'modal';
          //  document.getElementById("cobakonfpembayaran").dataset.datatarget = '#konfirmasipembayaran';

          //  var myModalInstance = new Modal(myModal, options);
          //  myModalInstance.show();
          //  x.setAttribute('data-target','#konfirmasipembayaran');

            this.dataDetail = res.json();
            this.tanggalmulai = this.dataDetail.TglMulai;
            this.tanggalselesai = this.dataDetail.TglSelesai;
            this.dataUpdate = this.dataDetail;
            this.dataUpdate.UserNamePegawai = localStorage.getItem("username");
            this.dataUpdate.StatusDataSewa = "aktif";
            console.log(this.dataUpdate.StatusDataSewa)
  
            //  this.dataDetail.StatusDataSewa="aktif";
            this.http.get('https://penyewaanbatch124.herokuapp.com/api/kdbarang/' + kdbarang)
              .subscribe((res: Response) => {
                this.dataBarang = res.json();
                this.dataBarangUpdate = this.dataBarang[0];
                this.idBarang = this.dataBarang[0]._id;
                this.harga = this.dataUpdate.JumlahBarang * this.dataBarang[0].HargaSewa * Math.floor((Date.parse(this.tanggalselesai.toString()) - Date.parse(this.tanggalmulai.toString())) / 86400000)
                this.dataPembayaran = new Data();
                debugger;
                console.log("harga : " + this.harga);
                // window.location.href='./datasewa';
              });
  
          })
   
        
      }

    } else {
      alert("sudah di bayar");
    }


  }

  datasewaPosttoPembayaran(id) {
    // if (document.cookie=="") {
    //   window.location.href='./login';
    // }else{



    this.http.put('https://penyewaanbatch124.herokuapp.com/api/datasewa/' + id + "?token=" + localStorage.getItem("token"), this.dataUpdate)
      .subscribe((res: Response) => {

        this.dataPembayaran.UserNamePenyewa = this.dataUpdate.UserNamePenyewa;
        this.dataPembayaran.HargaTotal = this.harga;
        this.dataPembayaran.TglPembayaran = new Date();
        this.dataPembayaran.TglPembayaran = this.dataPembayaran.TglPembayaran
        this.dataPembayaran.StatusPembayaran = "lunas";
        this.dataPembayaran.KdDataSewa = this.dataUpdate.KdDataSewa;
        // this.dataBarangUpdate.JumlahBarang = this.dataBarangUpdate.JumlahBarang - this.dataUpdate.JumlahBarang;
        debugger;
        this.http.put('https://penyewaanbatch124.herokuapp.com/api/barang/' + this.idBarang, this.dataBarangUpdate)
          .subscribe((res: Response) => {



            let header = new Headers({ 'Content-Type': 'application/json' });
            let opsi = new RequestOptions({ headers: header });
            let data = JSON.stringify(this.dataPembayaran);
            this.http.post('https://penyewaanbatch124.herokuapp.com/api/pembayaran?token=' + localStorage.getItem("token"), data, opsi)
              .subscribe((res: Response) => {
                window.location.href = './datasewa';
                debugger;


              })

          })

      });


    // }
  }

  kembaliBarang(id, statusdatasewa) {
    if (statusdatasewa == "booked") {
      alert("anda harus bayar terlebih dahulu")
    } else if (statusdatasewa == "selesai") {
      alert("barang sudah dikembalikan")
    } else {
      window.location.href = './datasewa/kembali/' + id;
    }


  }
}
