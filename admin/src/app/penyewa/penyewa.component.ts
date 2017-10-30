import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';
import * as $ from 'jquery';
import 'datatables.net'

@Component({
  selector: 'app-penyewa',
  templateUrl: './penyewa.component.html',
  styleUrls: ['./penyewa.component.css']
})
export class PenyewaComponent implements OnInit {
  dataPenyewa:Object;
  id:String;
  
  
    constructor(private http:Http) { }
  
    ngOnInit() {
      //document.cookie="token=";
      //document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      //debugger;
  
      // if (document.cookie=="") {
      //   window.location.href='./login';
      // }else{
        this.http.get('https://penyewaanbatch124.herokuapp.com/api/penyewa')
        .subscribe((res:Response) =>{
          this.dataPenyewa=res.json()
          $(document).ready(function(){
            $('#penyewa').DataTable();
        })
        
        });
      // }
      
    }
  
    penyewaDelete(id){
      this.http.delete('https://penyewaanbatch124.herokuapp.com/api/penyewa/'+id)
      .subscribe((res:Response)=>{
        window.location.href='./penyewa';
  
      })
    }
  
  }
  