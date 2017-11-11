import { Component, OnInit } from '@angular/core';
import { Http, Response, Request, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';



@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  dataPenyewa: any;
  dataSewa: any;
  dataSewaBook: any;
  dataSewaLate: any;
  dataBarang:any;
  dataSewaDetail:any;
  kdPenyewa: String;
  today: Date;
  timeDiff: any;
  diffDays: any;
  denda: any;
  dataEdit : Object;
  idBarang : String;
  id:String;
  dataSewaBarang : any;
  tanggal : any;
  dataDenda : any;
  Denda : any;
  dataRentDetail :any;
  dataItemDetail : any;
  dataFineDetail:any;

  constructor(private http:Http, private route:ActivatedRoute) {
    this.route.params.subscribe(params =>{
      this.id=params['id'];
      this.dataEdit=[];
      this.dataSewaLate=[];
      this.dataSewa=[];
      this.dataSewaBook=[];
      this.denda=[];
      this.tanggal=[];
      this.dataDenda=[];
      
      
    })
   }


  ngOnInit() {
    debugger;
    this.today = new Date();
    this.dataSewaLate = [];
    if (localStorage.getItem("username") == null) {
      window.location.href = "./";
    } else {
      this.http.get('https://penyewaanbatch124.herokuapp.com/api/penyewa/search/' + localStorage.getItem("username"))
        .subscribe((res: Response) => {
          this.dataPenyewa = res.json();
          console.log(this.dataPenyewa.KdPenyewa);

          this.http.get('https://penyewaanbatch124.herokuapp.com/api/datasewa/search/' + this.dataPenyewa.UserNamePenyewa+'?token='+localStorage.getItem("token"))
            .subscribe((res: Response) => {
              this.dataSewa = res.json();
              console.log(this.dataSewa);
              debugger;
              var index=0;
              // for (var i = 0; i < this.dataSewa.length; i++) {
              //   if (this.today > new Date(this.dataSewa[i].TglSelesai)) {
              //     //this.timeDiff = Math.abs(this.today.getTime() - this.dataPenyewa[0].TglSelesai.getTime());
              //     //this.diffDays = Math.ceil(this.timeDiff / (1000 * 3600 * 24));
              //     // this.denda = 10000 * Math.floor(( Date.parse(this.today.toString()) - Date.parse(this.dataSewa[i].TglSelesai) ) / 86400000); 
              //     console.log("denda : "+ this.denda);
              //     debugger;
              //     // this.dataSewaLate[index] = {
              //     //   "KdDataSewa" : this.dataSewa[i].KdDataSewa,
              //     //   "Denda" : this.denda
              //     // }
              //     index++;
              //   }
              //   debugger;


              // }
            })

          this.http.get('https://penyewaanbatch124.herokuapp.com/api/datasewa/search2/' + this.dataPenyewa.UserNamePenyewa+'?token='+localStorage.getItem("token"))
            .subscribe((res: Response) => {
              this.dataSewaBook = res.json();
              console.log(this.dataSewaBook);
              debugger;
            })

            this.http.get('https://penyewaanbatch124.herokuapp.com/api/datasewa/search3/' + this.dataPenyewa.UserNamePenyewa+'?token='+localStorage.getItem("token"))
            .subscribe((res: Response) => {
              this.dataSewaLate = res.json();
              console.log(this.dataSewaLate);
              debugger;
              
              for (var index = 0; index < this.dataSewaLate.length-1; index++) {
                this.tanggal=this.dataSewaLate[index].TglSelesai;
                this.http.get('https://penyewaanbatch124.herokuapp.com/api/kdbarang/' + this.dataSewaLate[index].KdBarang)
                .subscribe((res: Response) => {
                  this.dataSewaBarang = res.json();
                  console.log("denda1 : "+this.dataSewaBarang.HargaDenda);
                  console.log("denda2 : "+this.dataSewaBarang[0].HargaDenda);
                  console.log("tgl skrng : "+Date.parse(this.today.toString()));
                  console.log("tgl selesai1 : "+Date.parse(this.tanggal.toString()));
                  console.log("tgl selesai2 : "+Date.parse(this.dataSewaLate[index]));
                  console.log("data sewa late : "+Date.parse(this.dataSewaLate));
                  debugger;                  
                  this.denda[index]=(this.dataSewaBarang[0].HargaDenda * Math.floor((Date.parse(this.today.toString()) - Date.parse(this.tanggal.toString())) / 86400000))
                  console.log("denda : "+this.denda[index]);
                
                  debugger;
                })
                
              }


              

            })

        })



    }
  }

  getDateFormat(timestamp) {
    return new Date(timestamp);
  }

  dataProfile(id){
    
    this.http.get('https://penyewaanbatch124.herokuapp.com/api/penyewa/' + id)
    .subscribe((res:Response)=>{
      this.dataEdit=res.json();
      debugger;
    })
    debugger;
  }

  profileEdit(id,dataEdit){
        let z = dataEdit.NamaPenyewa;
        let a = dataEdit.EmailPenyewa;
        let b = dataEdit.AlamatPenyewa;
        let c = dataEdit.NoTelp;
        let atpos = a.indexOf("@");
        let dotpos = a.lastIndexOf(".");
        let number = /^[0-9]+$/;

        if (z=="" || a=="" || b=="" || c=="" ||
        z==null || a==null || b==null || c==null ) {
        alert("data harus diisi semua")
        }else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=a.length) {
          alert("alamat email salah");
        }else if (!c.match(number)) {
          alert("no telp harus angka");
        }else if (c.length!=12) {
          alert("no telp harus 12 digit")
        
        }else{
        this.http.put('https://penyewaanbatch124.herokuapp.com/api/penyewa/'+id,dataEdit)
      .subscribe((res:Response)=>{
       window.location.href='./profile/'+localStorage.getItem("username");
       debugger;
      })
    }
  
  }

  datasewaDelete(id,kdbarang) {
         // ambil id barang utk digunakan saat update jumlah barang
        this.http.get('https://penyewaanbatch124.herokuapp.com/api/kdbarang/' + kdbarang+'?token='+localStorage.getItem("token"))
        .subscribe((res: Response) => {
          this.dataBarang = res.json()
          this.idBarang = this.dataBarang[0]._id;
          
        
          this.http.get('https://penyewaanbatch124.herokuapp.com/api/datasewa/'+id+'?token='+localStorage.getItem("token"))
          .subscribe((res:Response)=>{
          //  window.location.href='./barang';
           
           this.dataSewaDetail=res.json();
           this.dataBarang[0].JumlahBarang=this.dataBarang[0].JumlahBarang+this.dataSewaDetail.JumlahBarang;
           console.log(this.dataBarang[0].JumlahBarang)
           
		   
		   
           this.http.put('https://penyewaanbatch124.herokuapp.com/api/barang/'+this.idBarang,this.dataBarang[0])
           .subscribe((res:Response)=>{
           //  window.location.href='./barang';
            
			
            if (confirm("are you sure want to cencel this booking ?") == true) {
				
              this.http.delete('https://penyewaanbatch124.herokuapp.com/api/datasewa/' + id+'?token='+localStorage.getItem("token"))
                .subscribe((res: Response) => {
                  window.location.href='./profile/'+localStorage.getItem("username");
                });
            } else {
            }
        });

       });     
     })
  }

  rentDetail(item){
    this.http.get('https://penyewaanbatch124.herokuapp.com/api/pembayaran/kddatasewa/'+item.KdDataSewa+'?token='+localStorage.getItem("token"))
    .subscribe((res:Response)=>{
    //  window.location.href='./barang';
     debugger;
     this.dataRentDetail=res.json();
     this.dataItemDetail=item
     debugger;
    });

  }

  fineDetail(item){
    this.today = new Date();
    this.http.get('https://penyewaanbatch124.herokuapp.com/api/kdbarang/' + item.KdBarang)
    .subscribe((res: Response) => {
      this.dataSewaBarang = res.json();
      console.log("denda1 : "+this.dataSewaBarang.HargaDenda);
      console.log("denda2 : "+this.dataSewaBarang[0].HargaDenda);
      console.log("tgl skrng : "+Date.parse(this.today.toString()));
      console.log("tgl selesai1 : "+Date.parse(item.TglSelesai.toString()));
    
      debugger;                  
      this.denda=(item.JumlahBarang * this.dataSewaBarang[0].HargaDenda * Math.floor((Date.parse(this.today.toString()) - Date.parse(item.TglSelesai.toString())) / 86400000))
      this.dataFineDetail = item;

  })
}


}


