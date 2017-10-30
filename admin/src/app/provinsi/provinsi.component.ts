import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';

@Component({
  selector: 'app-provinsi',
  templateUrl: './provinsi.component.html',
  styleUrls: ['./provinsi.component.css']
})
export class ProvinsiComponent implements OnInit {
dataProvinsi:Object;
id:String;
dataKota:Object;

  constructor(private http:Http) { }

  ngOnInit() {
    //document.cookie="token=";
    //document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    //debugger;

    if (document.cookie=="") {
      window.location.href='./login';
    }else{
      this.http.get('http://localhost:8889/api/provinsi?'+document.cookie)
      .subscribe((res:Response) =>{
        this.dataProvinsi=res.json()
        
      })
    }
    
  }

  provinsiDelete(idProvinsi){
    this.http.delete('http://localhost:8889/api/provinsi/'+idProvinsi+'?'+document.cookie)
    .subscribe((res:Response)=>{
      window.location.href='./provinsi';

    })
  }

  Provinsi(){
    this.http.get('http://localhost:8889/api/provinsi')
    .subscribe((res:Response)=>{
      this.dataProvinsi=res.json();
      debugger;
    }) 
  }

}
