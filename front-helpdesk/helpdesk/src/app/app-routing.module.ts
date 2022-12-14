import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { TecnicoCreateComponent } from './components/tecnico/tecnico-create/tecnico-create.component';
import { TecnicoListComponent } from './components/tecnico/tecnico-list/tecnico-list.component';
import { AlthService } from './services/alth.service';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path:'',component: NavComponent, canActivate:[AlthService] , children:[
    {path:'home', component: HomeComponent},

    {path:'tecnico', component: TecnicoListComponent},
    {path:'tecnico/create', component: TecnicoCreateComponent}
]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
