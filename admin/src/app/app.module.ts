import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes }   from '@angular/router';
import { FormsModule, ReactiveFormsModule}    from '@angular/forms';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common'; 

import { AppComponent } from './app.component';
import { IndexheaderComponent } from './indexheader/indexheader.component';
import { IndexfooterComponent } from './indexfooter/indexfooter.component';
import { IndexsidebarComponent } from './indexsidebar/indexsidebar.component';
import { LoginComponent } from './login/login.component';
// import { RumahSakitComponent} from './rumah-sakit/rumah-sakit.component';
import { DaftarComponent } from './daftar/daftar.component';
import { BarangComponent } from './barang/barang.component';
import { BarangaddComponent } from './barang/barangadd/barangadd.component';
import { BarangdetailComponent } from './barang/barangdetail/barangdetail.component';
import { BarangeditComponent } from './barang/barangedit/barangedit.component';
import { PenyewaComponent } from './penyewa/penyewa.component';
import { PenyewaaddComponent } from './penyewa/penyewaadd/penyewaadd.component';
import { PenyewadetailComponent } from './penyewa/penyewadetail/penyewadetail.component';
import { PenyewaeditComponent } from './penyewa/penyewaedit/penyewaedit.component';
import { DataSewaComponent } from './data-sewa/data-sewa.component';
import { DataSewaaddComponent } from './data-sewa/data-sewaadd/data-sewaadd.component';
import { DataSewadetailComponent } from './data-sewa/data-sewadetail/data-sewadetail.component';
import { DataSewaeditComponent } from './data-sewa/data-sewaedit/data-sewaedit.component';
import { AkunComponent } from './akun/akun.component';
import { AkunaddComponent } from './akun/akunadd/akunadd.component';
import { AkundetailComponent } from './akun/akundetail/akundetail.component';
import { AkuneditComponent } from './akun/akunedit/akunedit.component';
import { DendaComponent } from './denda/denda.component';
import { DendaaddComponent } from './denda/dendaadd/dendaadd.component';
import { DendadetailComponent } from './denda/dendadetail/dendadetail.component';
import { DendaeditComponent } from './denda/dendaedit/dendaedit.component';
import { KategoriComponent } from './kategori/kategori.component';
import { KategoriaddComponent } from './kategori/kategoriadd/kategoriadd.component';
import { KategoridetailComponent } from './kategori/kategoridetail/kategoridetail.component';
import { KategorieditComponent } from './kategori/kategoriedit/kategoriedit.component';
import { PegawaiComponent } from './pegawai/pegawai.component';
import { PegawaiaddComponent } from './pegawai/pegawaiadd/pegawaiadd.component';
import { PegawaidetailComponent } from './pegawai/pegawaidetail/pegawaidetail.component';
import { PegawaieditComponent } from './pegawai/pegawaiedit/pegawaiedit.component';
import { PembayaranComponent } from './pembayaran/pembayaran.component';
import { PembayaranaddComponent } from './pembayaran/pembayaranadd/pembayaranadd.component';
import { PembayarandetailComponent } from './pembayaran/pembayarandetail/pembayarandetail.component';
import { PembayaraneditComponent } from './pembayaran/pembayaranedit/pembayaranedit.component';
import { DataSewakembaliComponent} from './data-sewa/data-sewakembali/data-sewakembali.component';
import { SearchComponent } from './search/search.component';


let routes : Routes=[
  {path:'login',component:LoginComponent},
  {path : '',component:SearchComponent},
  {path:'daftar',component:DaftarComponent},
  {path:'barang',component:BarangComponent},
  {path:'barang/add',component:BarangaddComponent},
  {path:'barang/detail/:id',component:BarangdetailComponent},
  {path:'barang/edit/:id',component:BarangeditComponent},
  {path:'penyewa',component:PenyewaComponent},
  {path:'penyewa/add',component:PenyewaaddComponent},
  {path:'penyewa/detail/:id',component:PenyewadetailComponent},
  {path:'penyewa/edit/:id',component:PenyewaeditComponent},
  {path:'datasewa',component:DataSewaComponent},
  {path:'datasewa/add',component:DataSewaaddComponent},
  {path:'datasewa/detail/:id',component:DataSewadetailComponent},
  {path:'datasewa/edit/:id',component:DataSewaeditComponent},
  {path:'akun',component:AkunComponent},
  {path:'akun/add',component:AkunaddComponent},
  {path:'akun/detail/:id',component:AkundetailComponent},
  {path:'akun/edit/:id',component:AkuneditComponent},
  {path:'denda',component:DendaComponent},
  {path:'denda/add',component:DendaaddComponent},
  {path:'denda/detail/:id',component:DendadetailComponent},
  {path:'denda/edit/:id',component:DendaeditComponent},
  {path:'kategori',component:KategoriComponent},
  {path:'kategori/add',component:KategoriaddComponent},
  {path:'kategori/detail/:id',component:KategoridetailComponent},
  {path:'kategori/edit/:id',component:KategorieditComponent},
  {path:'pegawai',component:PegawaiComponent},
  {path:'pegawai/add',component:PegawaiaddComponent},
  {path:'pegawai/detail/:id',component:PegawaidetailComponent},
  {path:'pegawai/edit/:id',component:PegawaieditComponent},
  {path:'pembayaran',component:PembayaranComponent},
  {path:'pembayaran/add',component:PembayaranaddComponent},
  {path:'pembayaran/detail/:id',component:PembayarandetailComponent},
  {path:'pembayaran/edit/:id',component:PembayaraneditComponent},
  {path:'datasewa/kembali/:id',component:DataSewakembaliComponent}

]



@NgModule({
  declarations: [
    AppComponent,
    IndexheaderComponent,
    IndexfooterComponent,
    IndexsidebarComponent,  
    LoginComponent,
    // RumahSakitComponent,
    DaftarComponent,
    BarangComponent,
    BarangaddComponent,
    BarangdetailComponent,
    BarangeditComponent,
    PenyewaComponent,
    PenyewaaddComponent,
    PenyewadetailComponent,
    PenyewaeditComponent,
    DataSewaComponent,
    DataSewaaddComponent,
    DataSewadetailComponent,
    DataSewaeditComponent,
    DataSewakembaliComponent,
    AkunComponent,
    AkunaddComponent,
    AkundetailComponent,
    AkuneditComponent,
    DendaComponent,
    DendaaddComponent,
    DendadetailComponent,
    DendaeditComponent,
    KategoriComponent,
    KategoriaddComponent,
    KategoridetailComponent,
    KategorieditComponent,
    PegawaiComponent,
    PegawaiaddComponent,
    PegawaidetailComponent,
    PegawaieditComponent,
    PembayaranComponent,
    PembayaranaddComponent,
    PembayarandetailComponent,
    PembayaraneditComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
