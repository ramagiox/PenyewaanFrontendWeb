import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { DaterangepickerModule } from 'angular-2-daterangepicker';

import { AppComponent } from './app.component';
import { IndexfooterComponent } from './indexfooter/indexfooter.component';
import { IndexheaderComponent } from './indexheader/indexheader.component';
import { IndexcontentComponent } from './indexcontent/indexcontent.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ItemdetailComponent } from './itemdetail/itemdetail.component';
import { RentformComponent } from './rentform/rentform.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfilComponent } from './profil/profil.component';
import { RentdetailComponent } from './profil/rentdetail/rentdetail.component';
import { SearchComponent } from './search/search.component';

let routes : Routes = [
  {path:"",component:HomepageComponent},
  {path:"item/detail/:id",component:ItemdetailComponent},
  {path:"item/rent/:id",component:RentformComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"profile/:id",component:ProfilComponent},
  {path:"profil/rentdetail/:id",component:RentdetailComponent},
  {path:"search/:id",component:SearchComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    IndexfooterComponent,
    IndexheaderComponent,
    IndexcontentComponent,
    HomepageComponent,
    ItemdetailComponent,
    RentformComponent,
    LoginComponent,
    RegisterComponent,
    ProfilComponent,
    RentdetailComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    DaterangepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
