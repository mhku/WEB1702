import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {Demo01Component } from './demo01/demo01.component'
import {Demo02Component } from './demo02/demo02.component'
import {Demo05Component } from './demo05/demo05.component'
@NgModule({
  imports:      [ BrowserModule ],
  // 将每一个该模块中的组件声明，写在该数组中
  declarations: [ AppComponent ,Demo01Component,Demo02Component],
  //指定模块要启动哪个组件
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
