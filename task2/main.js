////shape object
function Shape(w,h){
if(this.constructor===Shape){
throw'you can not creat any instance';
}
this.width=w;
this.height=h;
}
Shape.prototype.calcarea=function(){
    return this.width*this.height;
}
Shape.prototype.calcPriemeter=function(){
    return 2*(this.width+this.height);
}
// var shape1= new Shape();
// console.log(shape1);

////Rectangular object

function Rectangular(w,h){
    Shape.call(this,w,h);
    if(this.constructor=== Rectangular){
        if(Rectangular.count>0){
            throw " you can instance only one Rectangular";
        }
        Rectangular.count++;
    }
   
}
Rectangular.prototype=Object.create(Shape.prototype);
Rectangular.prototype.constructor=Rectangular;
Rectangular.count=0;

var rec= new Rectangular(3,5);
console.log(rec.calcPriemeter());
console.log(rec.calcarea());

////Square object

function Square(l){

    Rectangular.call(this,l,l);
    if(this.constructor=== Square){
        if(Square.count>0){
            throw " you can instance only one square ";
        }
        Square.count++;
    }    
}
Square.prototype=Object.create(Rectangular.prototype);
Square.prototype.constructor=Square;
Square.count=0;
var sqr= new Square(5);
var sqr= new Square(9);

console.log(sqr.calcPriemeter());
console.log(sqr.calcarea());

