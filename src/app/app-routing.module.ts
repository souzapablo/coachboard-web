import { DeleteCareerComponent } from './components/careers/delete-career/delete-career.component';
import { CreateCareerComponent } from './components/careers/create-career/create-career.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCareersComponent } from './components/careers/list-careers/list-careers.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    component: ListCareersComponent,
    canActivate: [authGuard],
  },
  {
    path: 'create-career',
    component: CreateCareerComponent,
  },
  {
    path: 'careers/delete-career/:id',
    component: DeleteCareerComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
