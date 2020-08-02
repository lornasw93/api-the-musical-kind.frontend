import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { APP_ROUTES } from "./app.routing";
import { NavMenuComponent } from "./shared/nav-menu/nav-menu.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { LyricComponent } from './lyric/lyric.component';
import { DeezerSearchComponent } from './deezer-search/deezer-search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    PageNotFoundComponent,
    FooterComponent,
    LyricComponent,
    DeezerSearchComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
    FontAwesomeModule,
    ReactiveFormsModule,
    NgbModule,
    ScrollToModule.forRoot(),
    NgHttpLoaderModule.forRoot(),
    SweetAlert2Module.forRoot(),
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
