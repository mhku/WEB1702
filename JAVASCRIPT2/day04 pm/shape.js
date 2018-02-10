//创建Cell类型描述每个格子
class Cell{
  constructor(r,c,src){
    this.r=r;
    this.c=c;
    this.src=src;
  }
}
//创建公共父类型Shape
class Shape{
  constructor(
    r0,c0,r1,c1,r2,c2,r3,c3,src){
    this.cells=[
      new Cell(r0,c0,src),
      new Cell(r1,c1,src),
      new Cell(r2,c2,src),
      new Cell(r3,c3,src),
    ]
  }
  moveDown(){
    //遍历当前图形的cells中每个cell
    for(var cell of this.cells)
      //将当前cell的r+1
      cell.r++;
  }
  moveLeft(){
    for(var cell of this.cells)
      cell.c--;
  }
  moveRight(){
    for(var cell of this.cells)
      cell.c++;
  }
  rotateR(){}
  rotateL(){}
}
//创建T图形类型
class T extends Shape{
  constructor(){
    super(0,3,0,4,0,5,1,4,"img/T.png");
  }
}
//创建O图形类型
class O extends Shape{
  constructor(){
    super(0,4,0,5,1,4,1,5,"img/O.png");
  }
}
//创建I图形类型
class I extends Shape{
  constructor(){
    super(0,3,0,4,0,5,0,6,"img/I.png");
  }
}
var s=new T();//O//I
console.dir(s);