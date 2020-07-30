import { Routes } from '@angular/router';
import { HomeComponent } from "./modules/home/home.component";
import { ArtistComponent } from "./modules/artist/artist.component";
import { SongComponent } from "./modules/song/song.component";
import { PageNotFoundComponent } from "./modules/page-not-found/page-not-found.component";

export const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'home', redirectTo: '/', pathMatch: 'full' },
  { path: 'artist', component: ArtistComponent },
  { path: 'song', component: SongComponent },
  { path: '**', component: PageNotFoundComponent }
];
