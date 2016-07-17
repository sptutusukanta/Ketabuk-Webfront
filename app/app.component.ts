import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { JournalsComponent } from './journals.component';
import './rxjs-operators';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [JournalsComponent, ROUTER_DIRECTIVES],
  providers: [ HTTP_PROVIDERS ]
})
export class AppComponent { }