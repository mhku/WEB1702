// 配置路由模块
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Demo01Component } from './demo01/demo01.component';
import { Demo02Component } from './demo02/demo02.component';
import { Demo03Component } from './demo03/demo03.component';
import { Demo04Component } from './demo04/demo04.component'
import { Demo05Component } from './demo05/demo05.component'
import {Demo06Component} from './demo06/demo06.component'
//配置一个对象数组，在对象中指定路由对应的地址和具体组件
const routes: Routes = [
  { path: 'demo01', component: Demo01Component },
  { path: 'demo02', component: Demo02Component },
  { path: 'demo03', component: Demo03Component},
  { path: 'demo04', component: Demo04Component},
  { path: 'demo05/:count', component: Demo05Component},
  { path:'demo06',component:Demo06Component},
  { path: '', pathMatch: 'full', redirectTo: 'demo06' }
];

// 在创建模块指定路由时，要将forChild改成forRoot
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

//export const routedComponents = [NameComponent];