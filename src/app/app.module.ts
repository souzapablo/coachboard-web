import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateCareerComponent } from './components/careers/create-career/create-career.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListCareersComponent } from './components/careers/list-careers/list-careers.component';
import { CareerComponent } from './components/careers/career/career.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DeleteCareerComponent } from './components/careers/delete-career/delete-career.component';
import { LoadNextComponent } from './components/load-next/load-next.component';
import { LoginComponent } from './components/login/login.component';
import { CustomInterceptor } from './components/login/interceptor/custom.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreateCareerComponent,
    ListCareersComponent,
    CareerComponent,
    DeleteCareerComponent,
    LoadNextComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
