import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';
import * as $ from 'jquery';
import 'datatables.net'

@Component({
  selector: 'app-kategori',
  templateUrl: './kategori.component.html',
  styleUrls: ['./kategori.component.css']
})
export class KategoriComponent implements OnInit {
  dataKategori:Object;
  id:String;
  
  public temp_var: Object=false;
    constructor(private http:Http) { }
  
    ngOnInit() {
      //document.cookie="token=";
      //document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      //debugger;
  
      // if (document.cookie=="") {
      //   window.location.href='./login';
      // }else{
        
        
        this.http.get('https://penyewaanbatch124.herokuapp.com/api/kategori')
        .subscribe((res:Response) =>{
          this.dataKategori=res.json()
          this.temp_var=true;
          $(document).ready(function(){
            $('#example').DataTable();
        })
        });
      // }
    }
  
    kategoriDelete(id){
      this.http.delete('https://penyewaanbatch124.herokuapp.com/api/kategori/'+id)
      .subscribe((res:Response)=>{
        window.location.href='./kategori';
  
      })
    }
  
  }
  