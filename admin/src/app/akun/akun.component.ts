import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';
import * as $ from 'jquery';
import 'datatables.net'

@Component({
  selector: 'app-akun',
  templateUrl: './akun.component.html',
  styleUrls: ['./akun.component.css']
})
export class AkunComponent implements OnInit {
  dataAkun:Object;
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
        
        
        this.http.get('https://penyewaanbatch124.herokuapp.com/api/akun')
        .subscribe((res:Response) =>{
          this.dataAkun=res.json()
          this.temp_var=true;
          $(document).ready(function(){
            $('#example').DataTable();
        })
        });
      // }
    }
  
    akunDelete(id){
      this.http.delete('https://penyewaanbatch124.herokuapp.com/api/akun/'+id)
      .subscribe((res:Response)=>{
        window.location.href='./akun';
  
      })
    }
  
  }
  