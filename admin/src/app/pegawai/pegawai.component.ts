import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';
import * as $ from 'jquery';
import 'datatables.net'

@Component({
  selector: 'app-pegawai',
  templateUrl: './pegawai.component.html',
  styleUrls: ['./pegawai.component.css']
})
export class PegawaiComponent implements OnInit {
  dataPegawai:Object;
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
        
        
        this.http.get('https://penyewaanbatch124.herokuapp.com/api/pegawai')
        .subscribe((res:Response) =>{
          this.dataPegawai=res.json()
          this.temp_var=true;
          $(document).ready(function(){
            $('#example').DataTable();
        })
        });
      // }
    }
  
    pegawaiDelete(id){
      if (confirm("apakah anda yakin akan menghapus data ini ?")==true) {
      this.http.delete('https://penyewaanbatch124.herokuapp.com/api/pegawai/'+id)
      .subscribe((res:Response)=>{
        window.location.href='./pegawai';
  
      })
    }else{

    }
    }
  
  }
  