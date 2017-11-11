import { Component, OnInit } from '@angular/core';
import { Http, Response, Request, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';
import * as $ from 'jquery';
import 'datatables.net';
import { Data } from './pembayaranadd/pembayaranaddModel';

@Component({
  selector: 'app-pembayaran',
  templateUrl: './pembayaran.component.html',
  styleUrls: ['./pembayaran.component.css']
})
export class PembayaranComponent implements OnInit {
  dataPembayaran:any;
  id:String;
  dataDetail : Object;
  dataEdit : Object;
  dataPembayaranTambah: Data;

  

  public temp_var: Object=false;
    constructor(private http:Http) { }
  
    ngOnInit() {
      //document.cookie="token=";
      //document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      //debugger;
  
      // if (document.cookie=="") {
      //   window.location.href='./login';
      // }else{
        
        
        this.http.get('https://penyewaanbatch124.herokuapp.com/api/pembayaran?token='+localStorage.getItem("token"))
        .subscribe((res:Response) =>{
          this.dataPembayaran=res.json();
          this.temp_var=true;
		  
          debugger;
          $(document).ready(function(){
            $('#example').DataTable();
        })
        });
      // }
    }
  
    pembayaranDelete(id){
      if (confirm("apakah anda yakin akan menghapus data ini ?")==true) {
      this.http.delete('https://penyewaanbatch124.herokuapp.com/api/pembayaran/'+id+'?token='+localStorage.getItem("token"))
      .subscribe((res:Response)=>{
        window.location.href='./pembayaran';
      })
    }else{

    }
    }
  
  }
  