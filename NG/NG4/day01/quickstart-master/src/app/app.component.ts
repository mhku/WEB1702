import { Component } from '@angular/core';
import {Demo01Component} from './demo01/demo01.component'
import {Demo02Component} from './demo02/demo02.component'
import {Demo03Component} from './demo03/demo03.component'
@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
   <router-outlet></router-outlet>
  `,
})
export class AppComponent  { name = 'Angular'; }
