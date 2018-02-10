import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'demo02',
    template: '<p> it is component</p>'
})

export class Demo02Component implements OnInit {
    constructor() { }

    ngOnInit() {
        console.log('in component onInit');
     }
}