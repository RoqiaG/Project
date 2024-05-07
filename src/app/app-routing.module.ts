import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { HomeApplicantComponent } from './component/home-applicant/home-applicant.component';
import { CompanyDashboardComponent } from './component/company-dashboard/company-dashboard.component';

const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'home-applicant',component:HomeApplicantComponent},
  {path:'dash-board-company',component:CompanyDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
