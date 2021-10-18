import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerConsentComponent } from './customer-consent/customer-consent.component';
import { OtherDetailsComponent } from './other-details/other-details.component';

const routes: Routes = [
  { path: 'customer-consent', component:CustomerConsentComponent },
  { path: 'other-details', component:OtherDetailsComponent},

  { path: '',   redirectTo: '/customer-consent', pathMatch: 'full' }, 
   // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
