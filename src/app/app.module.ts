import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CreateCareerComponent } from './pages/careers/create-career/create-career.component';
import { ListCareersComponent } from './pages/careers/list-careers/list-careers.component';
import { CareerComponent } from './pages/careers/career/career.component';
import { DeleteCareerComponent } from './pages/careers/delete-career/delete-career.component';
import { LoadNextComponent } from './shared/components/load-next/load-next.component';
import { LoginComponent } from './pages/login/login.component';
import { CustomInterceptor } from './pages/login/interceptor/custom.interceptor';

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
