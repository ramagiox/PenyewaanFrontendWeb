import { Component, OnInit } from '@angular/core';
import { Http, Response, Request, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';
import * as $ from 'jquery';
import 'datatables.net';
import { Data } from './kategoriaddModel';

@Component({
  selector: 'app-kategori',
  templateUrl: './kategori.component.html',
  styleUrls: ['./kategori.component.css']
})
export class KategoriComponent implements OnInit {
  dataKategori: Object;
  id: String;
  dataEdit: Object;
  dataKategoriTambah: Data;
  kdkategori: String;

  public temp_var: Object = false;
  constructor(private http: Http, private route: ActivatedRoute) {
    this.dataEdit = [];
  }

  ngOnInit() {
    this.http.get('https://penyewaanbatch124.herokuapp.com/api/kategori')
      .subscribe((res: Response) => {
        this.dataKategori = res.json()
        this.temp_var = true;
        $(document).ready(function () {
          $('#example').DataTable();
        })
      });

  }

  kategoriEdit(id, dataEdit) {
    
    if (dataEdit.KdKategori == "" || dataEdit.NamaKategori == "") {
      alert("semua field harus diisi")
    } else {
      this.http.put('https://penyewaanbatch124.herokuapp.com/api/kategori/' + id, dataEdit)
        .subscribe((res: Response) => {
          window.location.href = './kategori';
          debugger;
        })

    }

  }

  tambahKategori() {
    this.dataKategoriTambah = new Data();
  }

  kategoriDelete(id) {
    if (confirm("yakin ingin hapus data?") == true) {
      this.http.delete('https://penyewaanbatch124.herokuapp.com/api/kategori/' + id)
        .subscribe((res: Response) => {
          window.location.href = './kategori';

        })
    } else {

    }
  }

  createKategori(dataKategoriTambah) {

    if (document.forms["kategoriadd"]["KdKategori"].value == "" || document.forms["kategoriadd"]["NamaKategori"].value == "") {
      alert("data harus diisi semua")
    } else {

      this.http.get('https://penyewaanbatch124.herokuapp.com/api/kategori/kdkategori/' + dataKategoriTambah.KdKategori)
        .subscribe((res: Response) => {
          this.kdkategori = res.json();

          if (this.kdkategori == "") {
            let header = new Headers({ 'Content-Type': 'application/json' });
            let opsi = new RequestOptions({ headers: header });
            let data = JSON.stringify(this.dataKategoriTambah);
            this.http.post('https://penyewaanbatch124.herokuapp.com/api/kategori', data, opsi)
              .subscribe((res: Response) => {
                window.location.href = './kategori';
              })
          } else {
            alert("kode kategori sudah ada")
          }
        })
    }
  }

  kategoriModal(id) {
    this.http.get('https://penyewaanbatch124.herokuapp.com/api/kategori/' + id)
      .subscribe((res: Response) => {
        this.dataEdit = res.json();
      });
  }
}
