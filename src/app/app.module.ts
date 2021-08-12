import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { SettingsComponent } from "./pages/settings/settings.component";
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { EmailPreferencesComponent } from './pages/email-preferences/email-preferences.component';
import { CloseAccountComponent } from "./pages/close-account/close-account.component";
import {PrivacyPreferenceComponent} from "./pages/privacy-preference/privacy-preference.component";


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot()
  ],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent, SettingsComponent, ChangePasswordComponent, EmailPreferencesComponent, CloseAccountComponent, PrivacyPreferenceComponent],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
