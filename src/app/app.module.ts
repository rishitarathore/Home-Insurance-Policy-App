import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerConsentComponent } from './customer-consent/customer-consent.component';
import { OtherDetailsComponent } from './other-details/other-details.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { HomeStructureDetailsComponent } from './home-structure-details/home-structure-details.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { PaymentSuccessfulComponent } from './payment-successful/payment-successful.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { VehicleInsuranceComponent } from './vehicle-insurance/vehicle-insurance.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerDetailsTwoComponent } from './customer-details-two/customer-details-two.component';
import { HomeDetailsComponent } from './home-details/home-details.component';
import { PaymentComponent } from './payment/payment.component';
@NgModule({
  declarations: [
    AppComponent,
    CustomerConsentComponent,
    OtherDetailsComponent,
    ProgressBarComponent,
    CheckOutComponent,
    HomeStructureDetailsComponent,
    GetStartedComponent,
    PaymentSuccessfulComponent,
    FeedbackComponent,
    VehicleInsuranceComponent,
    CustomerDetailsComponent,
    CustomerDetailsTwoComponent,
    HomeDetailsComponent,
    PaymentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
