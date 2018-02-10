import {Component} from '@angular/core';

@Component({
    // 指定组件的名称，在其他组件中通过该名称读取模板中的内容
    selector:'demo01',
    //要显示的内容
    template:'<h1> Hello My Component</h1>'
})
//导出一个类，这样在其他组件中就可以import进来调用该组件
export class Demo01Component{

}