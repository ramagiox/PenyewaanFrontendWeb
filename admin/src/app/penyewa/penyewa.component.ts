import { Component, OnInit } from '@angular/core';
import { Http, Response, Request, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';
import * as $ from 'jquery';
import 'datatables.net';
import { Data } from './penyewaadd/penyewaaddModel';

@Component({
  selector: 'app-penyewa',
  templateUrl: './penyewa.component.html',
  styleUrls: ['./penyewa.component.css']
})
export class PenyewaComponent implements OnInit {
  dataPenyewa: any;
  id: String;
  dataDetail: Object;
  dataEdit: Object;
  dataPenyewaTambah: Data;
  usernamePenyewa: String;
  tgl : Date;
  umur : any;
  maxDate : String;


  constructor(private http: Http, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
	  this.umur=[];
    })
  }
  ngOnInit() {

    this.http.get('https://penyewaanbatch124.herokuapp.com/api/penyewa')
      .subscribe((res: Response) => {
        this.dataPenyewa = res.json()
		this.tgl = new Date();
		console.log(Date.parse(this.tgl.toString()))
		console.log(Date.parse(this.dataPenyewa[0].TglLahir.toString()))
		debugger;
		 for (var x =0; x<this.dataPenyewa.length;x++){
		 this.umur[x] = Math.floor(((Date.parse(this.tgl.toString()) - Date.parse(this.dataPenyewa[x].TglLahir.toString())) / 86400000)/365)
         this.dataPenyewa[x].umur = this.umur[x] 
		 }
		debugger;
		$(document).ready(function () {
          $('#penyewa').DataTable();
        })
      });

  }

  penyewaDetailModal(id) {

    this.http.get('https://penyewaanbatch124.herokuapp.com/api/penyewa/' + id)
      .subscribe((res: Response) => {
        this.dataDetail = res.json();
        this.dataEdit = res.json();

        this.tgl = new Date();
        
         var dd = this.tgl.getDate();
         if(dd<10){
           var ddstring = "0"+dd;
         } else{
           var ddstring = dd.toString();
         }
         var mm = this.tgl.getMonth()+1;
         if(mm<10){
           var mmstring = "0"+mm;
         } else{
           var mmstring = mm.toString();
         }
         var yyyy = this.tgl.getFullYear();
         this.maxDate = yyyy+"-"+mmstring+"-"+ddstring;
      });

  }

  penyewaEdit(id, dataEdit) {

    let x = dataEdit.UserNamePenyewa;
    let y = dataEdit.PasswordPenyewa;
    let z = dataEdit.NamaPenyewa;
    let a = dataEdit.EmailPenyewa;
    let b = dataEdit.AlamatPenyewa;
    let c = dataEdit.NoTelp;
    let atpos = a.indexOf("@");
    let dotpos = a.lastIndexOf(".");
    let number = /^[0-9]+$/;

    if (x == "" || y == "" || z == "" || a == "" || b == "" || c == "" ||
      x == null || y == null || z == null || a == null || b == null || c == null) {
      alert("data harus diisi semua")
    } else if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= a.length) {
      alert("alamat email salah");
    } else if (!c.match(number)) {
      alert("no telp harus angka");
    } else if (c.length != 12) {
      alert("no telp harus 12 digit")
    } else {

      this.http.put('https://penyewaanbatch124.herokuapp.com/api/penyewa/' + id, dataEdit)
        .subscribe((res: Response) => {
          window.location.href = './penyewa';
          debugger;
        })
    }

  }

  tambahPenyewa() {
    this.dataPenyewaTambah = new Data();
    this.tgl = new Date();
   
    var dd = this.tgl.getDate();
    if(dd<10){
      var ddstring = "0"+dd;
    } else{
      var ddstring = dd.toString();
    }
    var mm = this.tgl.getMonth()+1;
    if(mm<10){
      var mmstring = "0"+mm;
    } else{
      var mmstring = mm.toString();
    }
    var yyyy = this.tgl.getFullYear();
    this.maxDate = yyyy+"-"+mmstring+"-"+ddstring;
    console.log(this.tgl);
  }

  createPenyewa(dataPenyewaTambah) {

    let x = document.forms["penyewaadd"]["UserNamePenyewa"].value;
    let y = document.forms["penyewaadd"]["PasswordPenyewa"].value;
    let z = document.forms["penyewaadd"]["NamaPenyewa"].value;
    let a = document.forms["penyewaadd"]["EmailPenyewa"].value;
    let b = document.forms["penyewaadd"]["AlamatPenyewa"].value;
    let c = document.forms["penyewaadd"]["NoTelp"].value;
    let d = document.forms["penyewaadd"]["TglLahir"].value;
    let atpos = a.indexOf("@");
    let dotpos = a.lastIndexOf(".");
    let number = /^[0-9]+$/;
    let re = /^\w+$/;

    if (x == "" || y == "" || z == "" || a == "" || b == "" || c == "" || d=="" ||
      x == null || y == null || z == null || a == null || b == null || c == null || d==null) {
      alert("data harus diisi semua")
    } else if (!x.match(re)) {
      alert("username hanya boleh berisi huruf, angka dan underscores (_)");
    } else if (y.length < 6) {
      alert("password minimal 6 karakter");
    } else if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= a.length) {
      alert("alamat email salah");
    } else if (!c.match(number)) {
      alert("no telp harus angka");
    } else if (c.length != 12) {
      alert("no telp harus 12 digit")
    } else {

      this.http.get('https://penyewaanbatch124.herokuapp.com/api/penyewa/search/' + dataPenyewaTambah.UserNamePenyewa)
        .subscribe((res: Response) => {
          this.usernamePenyewa = res.json();
          if (this.usernamePenyewa == "" || this.usernamePenyewa == null) {

            let header = new Headers({ 'Content-Type': 'application/json' });
            let opsi = new RequestOptions({ headers: header });
            let data = JSON.stringify(this.dataPenyewaTambah);
			debugger;
            this.http.post('https://penyewaanbatch124.herokuapp.com/api/penyewa', data, opsi)
              .subscribe((res: Response) => {
                window.location.href = './penyewa';
              })
          } else {
            alert("username sudah ada")
          }

        });

    }

  }

  penyewaDelete(id) {
    if (confirm("apakah anda yakin akan menghapus data ini ?") == true) {
      this.http.delete('https://penyewaanbatch124.herokuapp.com/api/penyewa/' + id)
        .subscribe((res: Response) => {
          window.location.href = './penyewa';

        })
    } else {

    }
  }

}
