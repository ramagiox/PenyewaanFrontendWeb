import { Component, OnInit } from '@angular/core';
import { Http, Response, Request } from '@angular/http';
import { Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pembayaranedit',
  templateUrl: './pembayaranedit.component.html',
  styleUrls: ['./pembayaranedit.component.css']
})
export class PembayaraneditComponent implements OnInit {
  dataEdit : any;
  id:String;
  
    constructor(private http:Http, private route:ActivatedRoute) {
      this.route.params.subscribe(params =>{
        this.id=params['id'];
      })
     }
  
    ngOnInit() {
      // if (document.cookie=="") {
      //   window.location.href='./login';
      // }else{
      this.id;
      this.http.get('https://penyewaanbatch124.herokuapp.com/api/pembayaran/'+this.id+'?token='+localStorage.getItem("token"))
      .subscribe((res:Response)=>{
        this.dataEdit=res.json();
         this.dataEdit.TglPembayaran = new Date();
         this.dataEdit.TglPembayaran =  this.dataEdit.TglPembayaran.toDateString();
         debugger;
      })

    // }
    }
    pembayaranEdit(id){
      // if (document.cookie=="") {
      //   window.location.href='./login';
      // }else{
    
      
        this.http.put('https://penyewaanbatch124.herokuapp.com/api/pembayaran/'+this.id+'?token='+localStorage.getItem("token"),this.dataEdit)
        .subscribe((res:Response)=>{
         window.location.href='./pembayaran';
         debugger;
        })
     
    // }
    }
  
  }
  