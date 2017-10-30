import { Component, OnInit } from '@angular/core';
import { Http, Response, Request } from '@angular/http';
import { Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-penyewaedit',
  templateUrl: './penyewaedit.component.html',
  styleUrls: ['./penyewaedit.component.css']
})
export class PenyewaeditComponent implements OnInit {
  dataEdit : Object;
  id:String;
  KategoriBarang:Object;
  constructor(private http:Http, private route:ActivatedRoute) {
    this.route.params.subscribe(params =>{
      this.id=params['id'];
    })
   }

  ngOnInit() {
    this.id;
    this.http.get('https://penyewaanbatch124.herokuapp.com/api/penyewa/'+this.id)
    .subscribe((res:Response)=>{
      this.dataEdit=res.json();
      debugger;
    })
  }

  penyewaEdit(id){
    // if (document.cookie=="") {
    //   window.location.href='./login';
    // }else{
  
    
      this.http.put('https://penyewaanbatch124.herokuapp.com/api/penyewa/'+this.id,this.dataEdit)
      .subscribe((res:Response)=>{
       window.location.href='./penyewa';
       debugger;
      })
   
  // }
  }


}
