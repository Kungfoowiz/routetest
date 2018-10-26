import { Component } from '@angular/core';

/* "Barrel" of Http Interceptors */
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { OverriderService } from './overrider.service';




/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: OverriderService, multi: true },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '{{stuff | json}}',
  // template: '<h1>{{stuff[0].name}}</h1>',
  //styleUrls: ['./app.component.css']
})
export class AppComponent  {

  

  stuff = [
    {id: 1, name: 'test', type: 'lame'},
    {id: 2, name: 'cool', type: 'slow'},
    {id: 3, name: 'yeti', type: 'epic'},

  ];

  getStuff(){
    return this.stuff;
  }

  title = 'routetest';


  

}
