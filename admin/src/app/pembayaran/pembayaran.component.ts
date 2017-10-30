import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';
import * as $ from 'jquery';
import 'datatables.net'

@Component({
  selector: 'app-pembayaran',
  templateUrl: './pembayaran.component.html',
  styleUrls: ['./pembayaran.component.css']
})
export class PembayaranComponent implements OnInit {
  dataPembayaran:Object;
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
        
        
        this.http.get('https://penyewaanbatch124.herokuapp.com/api/pembayaran')
        .subscribe((res:Response) =>{
          this.dataPembayaran=res.json()
          this.temp_var=true;
          $(document).ready(function(){
            $('#example').DataTable();
        })
        });
      // }
    }
  
    pembayaranDelete(id){
      this.http.delete('https://penyewaanbatch124.herokuapp.com/api/pembayaran/'+id)
      .subscribe((res:Response)=>{
        window.location.href='./pembayaran';
  
      })
    }
  
  }
  