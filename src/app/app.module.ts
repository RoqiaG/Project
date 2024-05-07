import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { HomeApplicantComponent } from './component/home-applicant/home-applicant.component';
import { CompanyDashboardComponent } from './component/company-dashboard/company-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HomeApplicantComponent,
    CompanyDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
