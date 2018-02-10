var a=10;
function test(){
    a=100;
    console.log(a);
    console.log(this.a);
    var a;
    console.log(a);
}
test();

//100 10 100

var a=100;
function test(){
    console.log(a);
    a=10;
    console.log(a);
}
test();
console.log(a);
//100 10 10