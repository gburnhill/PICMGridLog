import { AuthGuardService as AuthGuard} from './services/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { ModifyIntubationResolver } from './modify-intubation/modify-intubation.resolver';
import { ModifyIntubationComponent } from './modify-intubation/modify-intubation.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEventComponent} from './create-event/create-event.component';
import { HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
{ path: 'createEvent', component: CreateEventComponent, canActivate: [AuthGuard]},
{path: 'home', component: HomeComponent},
{ path: 'details/:id', component: ModifyIntubationComponent, canActivate: [AuthGuard], resolve:{data : ModifyIntubationResolver} }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
