import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";


import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { SettingsComponent } from "src/app/pages/settings/settings.component";
import { ChangePasswordComponent } from "src/app/pages/change-password/change-password.component";
import { EmailPreferencesComponent } from "src/app/pages/email-preferences/email-preferences.component";
import { CloseAccountComponent } from "src/app/pages/close-account/close-account.component";
import { PrivacyPreferenceComponent } from "src/app/pages/privacy-preference/privacy-preference.component";


// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  
 
  { path: "notifications", component: NotificationsComponent },
  { path: "user", component: UserComponent },
  { path: "settings", component: SettingsComponent },
  { path: "changepassword", component:ChangePasswordComponent},
  { path: "emailpreferences", component:EmailPreferencesComponent},
  { path: "privacy", component:PrivacyPreferenceComponent},
  { path: "closeaccount", component:CloseAccountComponent},
  { path: "tables", component: TablesComponent },
  
  // { path: "rtl", component: RtlComponent }
];
