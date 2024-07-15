import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { NotfoundComponent } from './features/notfound/notfound.component';
import { PoliticsComponent } from './features/politics/politics.component';

export const routes: Routes = [
  { path: '', component: PoliticsComponent},
  { path: 'politica', component: PoliticsComponent},
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '/404' },
];
