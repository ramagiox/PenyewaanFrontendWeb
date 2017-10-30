import { Component, OnInit } from '@angular/core';
import { Http, Response, Request} from '@angular/http';
import { Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-provinsidetail',
  templateUrl: './provinsidetail.component.html',
  styleUrls: ['./provinsidetail.component.css']
})
export class ProvinsidetailComponent implements OnInit {
  id:String;
  dataDetail:Object;

  constructor(private http:Http, private route:ActivatedRoute) { 
    this.route.params.subscribe(params =>{
      this.id=params['id'];
    })
  }

  ngOnInit() {
    this.id;
    debugger;
    
      this.http.get('http://localhost:8889/api/provinsi/'+this.id+'?'+document.cookie)
      .subscribe((res:Response)=>{
        this.dataDetail=res.json();
        debugger;
      })
    
    
  }


 

}
