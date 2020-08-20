import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

//Rutas


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { CssComponent } from './components/css/css.component';
import { ResaltadoDirective } from './directives/resaltado.directive';
import { NgswitchComponent } from './components/ngswitch/ngswitch.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { UserNewComponent } from './components/user/user-new.component';
import { UserEditComponent } from './components/user/user-edit.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    CssComponent,
    ResaltadoDirective,
    NgswitchComponent,
    HomeComponent,
    UserComponent,
    UserNewComponent,
    UserEditComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    //ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
