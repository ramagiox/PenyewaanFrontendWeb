import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';
import * as $ from 'jquery';
import 'datatables.net'

@Component({
  selector: 'app-barang',
  templateUrl: './barang.component.html',
  styleUrls: ['./barang.component.css']
})
export class BarangComponent implements OnInit {
  dataBarang:Object;
  dataEdit:Object;
  KategoriBarang:Object;
  id:String;
  KdBarang:String;
  public temp_var: Object=false;
  
  
    constructor(private http:Http) { 
      this.dataEdit=[];
    }
  
    ngOnInit() {
      //document.cookie="token=";
      //document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      //debugger;
  
      // if (document.cookie=="") {
      //   window.location.href='./login';
      // }else{
        
        
        this.http.get('https://penyewaanbatch124.herokuapp.com/api/barang')
        .subscribe((res:Response) =>{
          this.dataBarang=res.json()
          this.temp_var=true;
          $(document).ready(function(){
            $('#example').DataTable();
        })

        
        });
      
      // $('#exampleModal').on('show.bs.modal', function (event) {
      //   var button = $(event.relatedTarget) // Button that triggered the modal
      //   var recipient = button.data('whatever') // Extract info from data-* attributes
      //   // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
      //   // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
      //   var modal = $(this)
      //   modal.find('.modal-title').text('New message to ' + recipient)
      //   modal.find('.modal-body input').val(recipient)
      // })
   
    }

    barangmodal(id){
      this.http.get('https://penyewaanbatch124.herokuapp.com/api/kategori')
      .subscribe((res:Response) =>{
        this.KategoriBarang=res.json();
        
        this.http.get('https://penyewaanbatch124.herokuapp.com/api/barang/'+id)
        .subscribe((res:Response)=>{
          this.dataEdit=res.json();
          
        });
      });
      
    }

    barangEdit(id){
      // if (document.cookie=="") {
      //   window.location.href='./login';
      // }else{
    
      
        this.http.put('https://penyewaanbatch124.herokuapp.com/api/barang/'+id,this.dataEdit)
        .subscribe((res:Response)=>{
         window.location.href='./barang';
         debugger;
        })
     
    // }
    }
  
    barangDelete(id){
      this.http.delete('https://penyewaanbatch124.herokuapp.com/api/barang/'+id)
      .subscribe((res:Response)=>{
        window.location.href='./barang';
  
      })
    }
  
  }
  