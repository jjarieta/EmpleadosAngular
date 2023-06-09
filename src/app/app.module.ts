import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AddempleadosComponent } from './components/addempleados/addempleados.component';
import { ShowempleadosComponent } from './components/showempleados/showempleados.component';
import { FormsModule }   from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AddempleadosComponent,
    ShowempleadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
