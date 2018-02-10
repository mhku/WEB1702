import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'demo03',
    templateUrl: './demo03.component.html'
})

export class Demo03Component implements OnInit {
    name="zhangSan";
    myList=[12,33,44];
    hasMore=false;
    myAge=20;
    myAddr="北京";

    constructor() { }

    ngOnInit() { }

    //定义一个方法
    handleRefresh(){
        alert('btn is clicked');
    }
}