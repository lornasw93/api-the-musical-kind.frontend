import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ArtistComponent } from "./artist/artist.component";
import { SongComponent } from "./song/song.component";

export const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'home', redirectTo: '/', pathMatch: 'full' },
  { path: 'artist', component: ArtistComponent },
  { path: 'song', component: SongComponent },
  { path: '**', component: PageNotFoundComponent }
];
