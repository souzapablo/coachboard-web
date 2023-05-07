import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { ListCareersComponent } from './pages/careers/list-careers/list-careers.component';
import { CreateCareerComponent } from './pages/careers/create-career/create-career.component';
import { DeleteCareerComponent } from './pages/careers/delete-career/delete-career.component';
import { LoginComponent } from './pages/login/login.component';

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
