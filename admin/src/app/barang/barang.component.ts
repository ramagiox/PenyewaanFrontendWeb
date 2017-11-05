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
  dataBarang:Object;
  dataEdit:Object;
  dataDetail:Object;
  KategoriBarang:Object;
  id:String;
  KdBarang:String;
  dataBarangTambah: Data;
  kode:String;

  public temp_var: Object=false;
  
  
    constructor(private http:Http) { 
      this.dataEdit=[];
    }
  
    ngOnInit() {
      //document.cookie="token=";
      //document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      //debugger;
  
      // if (document.cookie=="") {
      //   window.location.href='./login';
      // }else{
        
        
        this.http.get('https://penyewaanbatch124.herokuapp.com/api/barang')
        .subscribe((res:Response) =>{
          this.dataBarang=res.json()
          debugger;
          this.temp_var=true;
          $(document).ready(function(){
            $('#example').DataTable();
        })

        
        });
      
      // $('#exampleModal').on('show.bs.modal', function (event) {
      //   var button = $(event.relatedTarget) // Button that triggered the modal
      //   var recipient = button.data('whatever') // Extract info from data-* attributes
      //   // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
      //   // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
      //   var modal = $(this)
      //   modal.find('.modal-title').text('New message to ' + recipient)
      //   modal.find('.modal-body input').val(recipient)
      // })
   
    }

    barangmodal(id){
      this.http.get('https://penyewaanbatch124.herokuapp.com/api/kategori')
      .subscribe((res:Response) =>{
        this.KategoriBarang=res.json();
        
        this.http.get('https://penyewaanbatch124.herokuapp.com/api/barang/'+id)
        .subscribe((res:Response)=>{
          this.dataDetail = res.json();
          this.dataEdit=res.json();
          
        });
      });
      
    }

    barangEdit(id,dataEdit){
      // if (document.cookie=="") {
      //   window.location.href='./login';
      // }else{
        let number = /^[0-9]+$/;
        let x = dataEdit.KdBarang;
        let y = dataEdit.NamaBarang;
        let z = dataEdit.KdKategori;
        let a = dataEdit.StatusBarang;
        let b = dataEdit.HargaDenda;
        let c = dataEdit.JumlahBarang;
        let d = dataEdit.HargaSewa;
        let e = dataEdit.Foto;
       
  
         if (x=="" || y=="" || z=="" || a=="" || b=="" || c=="" || d=="" || e=="") {
              alert("data harus diisi semua")
        }else if (!number.test(b) || !number.test(c) || !number.test(d)) {
            alert("harga denda, jumlah barang dan harga sewa harus angka")
        }else{
          this.http.put('https://penyewaanbatch124.herokuapp.com/api/barang/'+id,dataEdit)
          .subscribe((res:Response)=>{
           window.location.href='./barang';
           debugger;
          })

        }
      
        
     
    // }
    }


    barangTambah() {
      // if (document.cookie=="") {
      //   window.location.href='./login';
      // }else{
        this.http.get('https://penyewaanbatch124.herokuapp.com/api/kategori')
        .subscribe((res:Response) =>{
          this.KategoriBarang=res.json()
        });
      this.dataBarangTambah = new Data();
      // }
    }

    createBarang(dataBarangTambah){
      // if (document.cookie=="") {
      //   window.location.href='./login';
      // }else{
      // let no_hp = document.forms["barangadd"]["HargaDenda"].value
      let number = /^[0-9]+$/;
      let x = document.forms["barangadd"]["KdBarang"].value;
      let y = document.forms["barangadd"]["NamaBarang"].value;
      let z = document.forms["barangadd"]["KdKategori"].value;
      let a = document.forms["barangadd"]["StatusBarang"].value;
      let b = document.forms["barangadd"]["HargaDenda"].value;
      let c = document.forms["barangadd"]["JumlahBarang"].value;
      let d = document.forms["barangadd"]["HargaSewa"].value;
      let e = document.forms["barangadd"]["Foto"].value;
     

       if (x=="" || y=="" || z=="" || a=="" || b=="" || c=="" || d=="" || e=="") {
            alert("data harus diisi semua")
      }else if (!number.test(b) || !number.test(c) || !number.test(d)) {
          alert("harga denda, jumlah barang dan harga sewa harus angka")
      }else{
        this.http.get("https://penyewaanbatch124.herokuapp.com/api/kdbarang/"+dataBarangTambah.KdBarang)
        .subscribe((res:Response) => {
            this.kode = res.json();
            if(this.kode == ""){
              let header = new Headers({'Content-Type':'application/json'});
              let opsi = new RequestOptions({headers:header});
              let data = JSON.stringify(this.dataBarangTambah);
              this.http.post('https://penyewaanbatch124.herokuapp.com/api/barang',data,opsi)
              .subscribe((res:Response)=>{
                window.location.href='./barang';
              })
            }else {
              alert("kode barang sudah ada")
            }
          });
        
      }
      
    // }
  }
  
    barangDelete(id){
      if (confirm("apakah anda yakin akan menghapus data ini ?")==true) {
      this.http.delete('https://penyewaanbatch124.herokuapp.com/api/barang/'+id)
      .subscribe((res:Response)=>{
        window.location.href='./barang';
  
      })
    }else{
      
    }
    }
  
  }
  