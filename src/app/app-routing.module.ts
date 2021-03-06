import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerConsentComponent } from './customer-consent/customer-consent.component';
import { OtherDetailsComponent } from './other-details/other-details.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { HomeStructureDetailsComponent } from './home-structure-details/home-structure-details.component';
import { PaymentSuccessfulComponent } from './payment-successful/payment-successful.component';
import { PaymentComponent } from './payment/payment.component';

import { FeedbackComponent } from './feedback/feedback.component';
import { VehicleInsuranceComponent } from './vehicle-insurance/vehicle-insurance.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerDetailsTwoComponent } from './customer-details-two/customer-details-two.component';
import { HomeDetailsComponent } from './home-details/home-details.component';
const routes: Routes = [
  { path: 'get-started', component:GetStartedComponent },

  { path: 'customer-consent', component:CustomerConsentComponent },
  { path: 'home-structure-details', component:HomeStructureDetailsComponent },
  { path: 'other-details', component:OtherDetailsComponent},
  { path: 'check-out', component:CheckOutComponent},
  { path: 'payment', component:PaymentComponent},

  { path: 'payment-sucessful', component:PaymentSuccessfulComponent},
  { path: 'feedback', component:FeedbackComponent},
  { path: 'vehicle-insurance', component:VehicleInsuranceComponent},
  { path: 'customer-details', component:CustomerDetailsComponent},
  { path: 'customer-details-two', component:CustomerDetailsTwoComponent},
  { path: 'home-details', component:HomeDetailsComponent },

  { path: '',   redirectTo: '/get-started', pathMatch: 'full' }, 
   // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
