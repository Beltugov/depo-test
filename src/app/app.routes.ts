import {Routes} from '@angular/router';
import {MainPage} from './pages/main-page/main-page';
import {UserPage} from './pages/user-page/user-page';


export const routes: Routes = [
  {path: '', component: MainPage},
  {path: 'my-collection', component: UserPage},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];
