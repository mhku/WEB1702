import { Injectable } from '@angular/core';

@Injectable()
export class DebugService {
    isProduction=false;
    constructor() { }

    log(msg:any){
        if(!this.isProduction)
        {
            console.log(msg);
        }
    }
}