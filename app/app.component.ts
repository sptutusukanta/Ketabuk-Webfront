import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';

import { HomeComponent } from './home.component';
import { JournalComponent } from './journal.component'
import { LoginComponent } from './login.component';
import { RegistrationComponent } from './registration.component';

import './rxjs-operators';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [HomeComponent, LoginComponent, RegistrationComponent, ROUTER_DIRECTIVES],
  providers: [ HTTP_PROVIDERS ],
  precompile: [HomeComponent, LoginComponent, RegistrationComponent, JournalComponent]
})
export class AppComponent { }