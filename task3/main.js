function Books(title, numofChapters, author,numofPages, publisher, numofCopies ){
this.title=title;
this.numofChapters=numofChapters;
this.author=author;
this.numofPages=numofPages;
this.publisher=publisher;
this.numofCopies=numofCopies;
}

function Box(height, width, length,material){
this.height=height;
this.width=width;
this.length=length;
this.numOfBooks=0;
this.volume=this.width*this.length*this.height;
this.material=material;
this.content=[];
 }

Box.prototype.countBooks = function () {
    return this.content.length;
  };

Box.prototype.add_arr= function(n){
    this.content.push(n);
    this.numOfBooks++
}
 Box.prototype.delete_books= function(b){
    for(var i=0;i< this.numOfBooks;i++){
        if(this.content[i].title===b){
            console.log("books");
            this.content.splice(i,1);
            break;
        }else{
            console.log(" no books");

        }
        }
    }
 Box.prototype.toString= function(){
    document.write("<h1> the elements of books </h1>");
    document.write("<h2> the box hieght is"+this.height+"</h2>");
    document.write("<h2> the box width is"+this.width+"</h2>");
    document.write("<h2> the box length is"+this.length+"</h2>");
    document.write("<h2> the box volume is"+this.height*this.width*this.length+"</h2>");
    document.write("<h2> the no.of books is"+this.content.length+"</h2>")
 }
 
 Box.prototype.books_num=function(){
    return this.content.length
 }


var book1=new Books("art",5,"merna",350,"ali",7);
var book2=new Books("sport",2,"mena",300,"alyaa",3);
var book3=new Books("soul",3,"mai",200,"ahmed",5);

console.log(book1);
console.log(book2);
console.log(book3);

var box1= new Box(300,100,200,"wood");
var box2= new Box(100,100,200,"wood");
var box3= new Box(400,100,200,"wood");
 
console.log(box1);

box1.add_arr(book1);
box1.add_arr(book2);
box1.add_arr(book3);

box2.add_arr(book1);
box2.add_arr(book3);

console.log(box1.countBooks());
box1.delete_books("art")
console.log(box1.countBooks());
box1.toString();
box2.toString();

