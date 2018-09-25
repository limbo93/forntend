import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { AppService } from "./app.service";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RegisterComponent } from "./register/register.component";
import { appRoutes } from "./app.routes";
import { LoginComponent } from "./login/login.component";
import { FormsModule } from "@angular/forms";
import { AuthService } from "./auth.service";
import { UsersComponent } from "./users/users.component";
import { ProfileComponent } from "./profile/profile.component";
import {
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatInputModule,
  MatListModule
} from "@angular/material";
import { MessageComponent } from './message/message.component';
import { ViewMessageComponent } from './view-message/view-message.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    UsersComponent,
    ProfileComponent,
    MessageComponent,
    ViewMessageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatListModule
  ],
  providers: [AppService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
