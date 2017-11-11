import { Component, OnInit } from '@angular/core';
import { Http, Response, Request, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';
import * as $ from 'jquery';
import 'datatables.net';
import { Data } from './barangadd/barangaddModel';

@Component({
  selector: 'app-barang',
  templateUrl: './barang.component.html',
  styleUrls: ['./barang.component.css']
})
export class BarangComponent implements OnInit {
  dataBarang: Object;
  dataEdit: Object;
  dataDetail: Object;
  KategoriBarang: Object;
  id: String;
  KdBarang: String;
  dataBarangTambah: Data;
  kode: String;

  public temp_var: Object = false;


  constructor(private http: Http) {
    this.dataEdit = [];
  }

  ngOnInit() {

    this.http.get('https://penyewaanbatch124.herokuapp.com/api/barang')
      .subscribe((res: Response) => {
        this.dataBarang = res.json()
        debugger;
        this.temp_var = true;
        $(document).ready(function () {
          $('#example').DataTable({
            "lengthMenu": [5, 10, 20, 25],
            "iDisplayLength": 10
          });
        })


      });

  }

  barangModal(id) {
    this.http.get('https://penyewaanbatch124.herokuapp.com/api/kategori')
      .subscribe((res: Response) => {
        this.KategoriBarang = res.json();

        this.http.get('https://penyewaanbatch124.herokuapp.com/api/barang/' + id)
          .subscribe((res: Response) => {
            this.dataDetail = res.json();
            this.dataEdit = res.json();

          });
      });

  }

  barangEdit(id, dataEdit) {

    let number = /^[0-9]+$/;
    
        if ( dataEdit.NamaBarang == "" 
        || dataEdit.KdKategori == "" || dataEdit.StatusBarang == "" 
        || dataEdit.HargaDenda == "" || dataEdit.JumlahBarang == "" 
        || dataEdit.HargaSewa == "" || dataEdit.Foto == "") {
          alert("semua field harus diisi")
        } else if (!number.test(dataEdit.HargaDenda) || !number.test(dataEdit.JumlahBarang) || !number.test(dataEdit.HargaSewa)) {
          alert("harga denda, jumlah barang dan harga sewa harus angka")
        } else {
      this.http.put('https://penyewaanbatch124.herokuapp.com/api/barang/' + id, dataEdit)
        .subscribe((res: Response) => {
          window.location.href = './barang';
          debugger;
        })

    }




  }


  barangTambah() {

    this.http.get('https://penyewaanbatch124.herokuapp.com/api/kategori')
      .subscribe((res: Response) => {
        this.KategoriBarang = res.json()
      });
    this.dataBarangTambah = new Data();

  }

  createBarang(dataBarangTambah) {

    let number = /^[0-9]+$/;

    if (document.forms["barangadd"]["KdBarang"].value == "" || document.forms["barangadd"]["KdBarang"].value == "" 
    || document.forms["barangadd"]["KdKategori"].value == "" || document.forms["barangadd"]["StatusBarang"].value == "" 
    || document.forms["barangadd"]["HargaDenda"].value == "" || document.forms["barangadd"]["JumlahBarang"].value == "" 
    || document.forms["barangadd"]["HargaSewa"].value == "" || document.forms["barangadd"]["Foto"].value == "") {
      alert("semua field harus diisi")
    } else if (!number.test(document.forms["barangadd"]["HargaDenda"].value) || !number.test(document.forms["barangadd"]["JumlahBarang"].value) || !number.test(document.forms["barangadd"]["HargaSewa"].value)) {
      alert("harga denda, jumlah barang dan harga sewa harus angka")
    } else {
      this.http.get("https://penyewaanbatch124.herokuapp.com/api/kdbarang/" + dataBarangTambah.KdBarang)
        .subscribe((res: Response) => {
          this.kode = res.json();
          if (this.kode == "") {
            let header = new Headers({ 'Content-Type': 'application/json' });
            let opsi = new RequestOptions({ headers: header });
            let data = JSON.stringify(this.dataBarangTambah);
            this.http.post('https://penyewaanbatch124.herokuapp.com/api/barang', data, opsi)
              .subscribe((res: Response) => {
                window.location.href = './barang';
              })
          } else {
            alert("Kode barang sudah ada")
          }
        });

    }


  }

  barangDelete(id) {
    if (confirm("yakin untuk hapus data ini ?") == true) {
      this.http.delete('https://penyewaanbatch124.herokuapp.com/api/barang/' + id)
        .subscribe((res: Response) => {
          window.location.href = './barang';

        })
    } else {

    }
  }

}
