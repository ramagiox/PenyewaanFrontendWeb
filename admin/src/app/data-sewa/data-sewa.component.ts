import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';
import * as $ from 'jquery';
import 'datatables.net'

@Component({
  selector: 'app-data-sewa',
  templateUrl: './data-sewa.component.html',
  styleUrls: ['./data-sewa.component.css']
})
export class DataSewaComponent implements OnInit {
  dataSewa:Object;
  id:String;
  KdSewa:String;
  public temp_var: Object=false;
  
  
    constructor(private http:Http) { }
  
    ngOnInit() {
      //document.cookie="token=";
      //document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      //debugger;
  
      // if (document.cookie=="") {
      //   window.location.href='./login';
      // }else{
        
        
        this.http.get('https://penyewaanbatch124.herokuapp.com/api/datasewa')
        .subscribe((res:Response) =>{
          this.dataSewa=res.json();
          this.temp_var=true;
          $(document).ready(function(){
            $('#example').DataTable();
            
        })
        });
      // } 
    }
  
    datasewaDelete(id){
      this.http.delete('https://penyewaanbatch124.herokuapp.com/api/datasewa/'+id)
      .subscribe((res:Response)=>{
        window.location.href='./datasewa';
  
      })
    }
  
  }
  