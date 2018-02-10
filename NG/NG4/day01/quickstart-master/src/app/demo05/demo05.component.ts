import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router'

@Component({
    selector: 'demo05',
    templateUrl: './demo05.component.html'
})

export class Demo05Component implements OnInit {
    constructor(private nowRoute:ActivatedRoute) { }
    // 在这个组件被加载时，接收传递来的参数将它显示在视图

    myValue="";

    ngOnInit() {
        //和初始化话相关的工作，接收参数
        // 
        this.nowRoute.params.subscribe((params:any)=>{
            console.log(params);
            this.myValue = params.count;
        })
     }
}