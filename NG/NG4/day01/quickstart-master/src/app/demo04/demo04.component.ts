import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
    selector: 'demo04',
    templateUrl: './demo04.component.html'
})

export class Demo04Component implements OnInit {
    constructor(private router:Router) { }

    ngOnInit() { }

    //定义一个跳转的方法
    //router navigateByUrl(path)
    jump(desPath:any){
        this.router.navigateByUrl(desPath);
    }

}