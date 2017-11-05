import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';
import * as $ from 'jquery';
import 'datatables.net'

@Component({
  selector: 'app-denda',
  templateUrl: './denda.component.html',
  styleUrls: ['./denda.component.css']
})
export class DendaComponent implements OnInit {
  dataDenda:Object;
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
        
        
        this.http.get('https://penyewaanbatch124.herokuapp.com/api/denda?token='+localStorage.getItem("token"))
        .subscribe((res:Response) =>{
          this.dataDenda=res.json()
          this.temp_var=true;
          $(document).ready(function(){
            $('#example').DataTable();
        })
        });
      // }
    }
  
    dendaDelete(id){
      if (confirm("apakah anda yakin akan menghapus data ini ?")==true) {
      this.http.delete('https://penyewaanbatch124.herokuapp.com/api/denda/'+id+'?token='+localStorage.getItem("token"))
      .subscribe((res:Response)=>{
        window.location.href='./denda';
  
      })
    }else {

    }
    }
  
  }
  