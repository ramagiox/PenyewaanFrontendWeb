import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';

@Component({
  selector: 'app-pendaftaran',
  templateUrl: './pendaftaran.component.html',
  styleUrls: ['./pendaftaran.component.css']
})
export class PendaftaranComponent implements OnInit {
  dataPendaftaran:Object;
  id:String;
  
    constructor(private http:Http) { }
  
    ngOnInit() {
      //document.cookie="token=";
      //document.cookie = '__lnkrntdmcvrd=-1; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      //debugger;
  
      // if (document.cookie=="") {
      //   window.location.href='./login';
      // }else{
        
        this.http.get('http://localhost:8889/api/pendaftaran')
        .subscribe((res:Response) =>{
          this.dataPendaftaran=res.json()
          debugger;
        })
      // }
  }
  
    pendaftaranDelete(id){
      // if (document.cookie=="") {
      //   window.location.href='./login';
      // }else{
      if (confirm("yakin mau dihapus ?")==true)
      {
      this.http.delete('http://localhost:8889/api/pendaftaran/'+id)
      .subscribe((res:Response)=>{
        window.location.href='./pendaftaran';
  
      })
    }else{

    }
    // }
  }
  
  }
  