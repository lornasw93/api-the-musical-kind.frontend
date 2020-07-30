import { Routes } from '@angular/router'; 
import { HomeComponent } from "./home/home.component"; 
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

export const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'home', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
