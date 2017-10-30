import { Component, OnInit } from '@angular/core';
import { Http, Response, Request } from '@angular/http';
import { Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-barangedit',
  templateUrl: './barangedit.component.html',
  styleUrls: ['./barangedit.component.css']
})
export class BarangeditComponent implements OnInit {
  dataEdit : Object;
  id:String;
  KategoriBarang:Object;
  
    constructor(private http:Http, private route:ActivatedRoute) {
      this.route.params.subscribe(params =>{
        this.id=params['id'];
      })
     }
  
    ngOnInit() {
      // if (document.cookie=="") {
      //   window.location.href='./login';
      // }else{
    

      this.http.get('https://penyewaanbatch124.herokuapp.com/api/kategori')
      .subscribe((res:Response) =>{
        this.KategoriBarang=res.json();
        
        this.http.get('https://penyewaanbatch124.herokuapp.com/api/barang/'+this.id)
        .subscribe((res:Response)=>{
          this.dataEdit=res.json();
          
        });
      });

    // }
    }
    barangEdit(id){
      // if (document.cookie=="") {
      //   window.location.href='./login';
      // }else{
    
      
        this.http.put('https://penyewaanbatch124.herokuapp.com/api/barang/'+this.id,this.dataEdit)
        .subscribe((res:Response)=>{
         window.location.href='./barang';
         debugger;
        })
     
    // }
    }
  
  }
  