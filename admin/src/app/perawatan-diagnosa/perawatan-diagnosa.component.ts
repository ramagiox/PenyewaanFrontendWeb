import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';

@Component({
  selector: 'app-perawatan-diagnosa',
  templateUrl: './perawatan-diagnosa.component.html',
  styleUrls: ['./perawatan-diagnosa.component.css']
})
export class PerawatanDiagnosaComponent implements OnInit {
  dataPerawatanDiagnosa:Object;
  id:String;
  
    constructor(private http:Http) { }
  
    ngOnInit() {
      //document.cookie="token=";
      document.cookie = '__lnkrntdmcvrd=-1; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      //debugger;
  
      if (document.cookie=="") {
        window.location.href='./login';
      }else{
       
        this.http.get('https://rsegi.herokuapp.com/api/perawatandiagnosa?'+document.cookie)
        .subscribe((res:Response) =>{
          this.dataPerawatanDiagnosa=res.json()
        
          
        })
      }
  }
  
    perawatanDiagnosaDelete(id){

      if (document.cookie=="") {
        window.location.href='./login';
      }else{

      if (confirm("apakah anda yakin akan menghapus data ini ?")==true) {
        this.http.delete('https://rsegi.herokuapp.com/api/perawatandiagnosa/'+id+'?'+document.cookie)
        .subscribe((res:Response)=>{
          window.location.href='./perawatandiagnosa';
    
        })
      }else{
        
      }
    }
      
    }
  
  }
  