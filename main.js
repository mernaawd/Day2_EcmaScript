//////task1

function Rectangle(h,w){
   this.hight= h;
   this.width= w;
 console.log(h,w);
 Rectangle.counter++;
}

Rectangle.counter=0;

Rectangle.prototype.calc_area= function(){
  return  this.hight* this.width;
 }
 Rectangle.prototype.calc_primeter=function(){
  return  2* (this.hight+this.width);
}

 Rectangle.prototype.toString=function(){
  var area= this.calc_area();
  var primeter= this.calc_primeter();
    return alert("hight="+this.hight+",width="+this.width+",area="+area+",primeter="+primeter+"");
  }

  Rectangle.getcounter= function(){
    return this.counter;
}
var rec1= new Rectangle(5,10);
var rec2= new Rectangle(3,10);


rec1.toString();
rec2.toString()

console.log('Num of created objects:', Rectangle.getcounter()); 

