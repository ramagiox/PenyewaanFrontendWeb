import { Component, OnInit } from '@angular/core';
import { Http, Response, Request, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';
import { Data } from './perawatan-diagnosaaddModel';

@Component({
  selector: 'app-perawatan-diagnosaadd',
  templateUrl: './perawatan-diagnosaadd.component.html',
  styleUrls: ['./perawatan-diagnosaadd.component.css']
})
export class PerawatanDiagnosaaddComponent implements OnInit {
dataPerawatDiagnosa : Data;
  constructor(private http:Http, private route:ActivatedRoute) {  }
  
    ngOnInit() {
      if (document.cookie=="") {
        window.location.href='./login';
      }else{
      this.dataPerawatDiagnosa = new Data();
      }
    }
    createPerawatan(dataPerawatDiagnosa){
      if (document.cookie=="") {
        window.location.href='./login';
      }else{

      if (dataPerawatDiagnosa.KdDiagnosa==null || dataPerawatDiagnosa.KdVariasiObat==null
      || dataPerawatDiagnosa.JangkaPemakaianObat==null || dataPerawatDiagnosa.TglPemberianObat==null
      || dataPerawatDiagnosa.KdDiagnosaAwal==null || dataPerawatDiagnosa.DosisObat==null) {
        alert("masih ada data yang kososng")
      }else{
      let header = new Headers({'Content-Type':'application/json'});
      let opsi = new RequestOptions({headers:header});
      let data = JSON.stringify(this.dataPerawatDiagnosa);
      this.http.post('https://rsegi.herokuapp.com/api/perawatandiagnosa?'+document.cookie,data,opsi)
      .subscribe((res:Response)=>{
        window.location.href='./perawatandiagnosa';
      })
    }
    }
  }
  
  }
  