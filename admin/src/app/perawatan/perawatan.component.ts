import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';

@Component({
  selector: 'app-perawatan',
  templateUrl: './perawatan.component.html',
  styleUrls: ['./perawatan.component.css']
})
export class PerawatanComponent implements OnInit {
  dataPerawatan:Object;
  id:String;
  
    constructor(private http:Http) { }
  
    ngOnInit() {
      //document.cookie="token=";
      //document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      //debugger;
  
      if (document.cookie=="") {
        window.location.href='./login';
      }else{
        this.http.get('https://rsegi.herokuapp.com/api/perawatan?'+document.cookie)
        .subscribe((res:Response) =>{
          this.dataPerawatan=res.json()
        })
      }
  }
  
    perawatanDelete(id){
      if (document.cookie=="") {
        window.location.href='./login';
      }else{
      if (confirm("apakah anda yakin, mau menghapus data ini ?")==true) {
        this.http.delete('https://rsegi.herokuapp.com/api/perawatan/'+id+'?'+document.cookie)
        .subscribe((res:Response)=>{
          window.location.href='./perawatan';
    
        })
      }else{
        
      }
    }
     
    }
  
  }
  