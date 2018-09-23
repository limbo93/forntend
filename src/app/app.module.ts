import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { AppService } from "./app.service";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatInputModule
} from "@angular/material";
import { RegisterComponent } from "./register/register.component";
import { appRoutes } from "./app.routes";
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AppComponent, RegisterComponent, LoginComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
