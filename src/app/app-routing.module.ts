import { DeleteCareerComponent } from './components/careers/delete-career/delete-career.component';
import { CreateCareerComponent } from './components/careers/create-career/create-career.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCareersComponent } from './components/careers/list-careers/list-careers.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-careers',
    pathMatch: 'full',
  },
  {
    path: 'create-career',
    component: CreateCareerComponent,
  },
  {
    path: 'list-careers',
    component: ListCareersComponent,
  },
  {
    path: 'careers/delete-career/:id',
    component: DeleteCareerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
