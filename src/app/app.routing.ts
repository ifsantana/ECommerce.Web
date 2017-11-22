import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home.component';
import { LoginComponent } from '../app/components/login.component';
import { RegisterComponent } from './components/register.component';
import { AuthGuard } from '../app/services/auth.guard';

const appRoutes: Routes = [
   { path: '', component: HomeComponent, canActivate: [AuthGuard] },
   { path: 'login', component: LoginComponent },
   { path: 'register', component: RegisterComponent },

   // otherwise redirect to home
   { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
