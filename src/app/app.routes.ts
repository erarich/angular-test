import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { NotfoundComponent } from './features/notfound/notfound.component';

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '/404' },
];
