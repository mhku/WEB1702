import { Component, OnInit } from '@angular/core';
import { DebugService} from './debug.service'

@Component({
    providers:[DebugService],
    selector: 'demo06',
    templateUrl: './demo06.component.html'
})

export class Demo06Component implements OnInit {
    constructor(private debugService:DebugService) { }

    ngOnInit() { }

    showLog(){
       // alert('btn is clicked');
        this.debugService.log('Hello Service');
    }
}