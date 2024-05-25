////////task1
// function Rectangle(h,w){
//    var hight= h;
//    var width= w;
//  console.log(h,w);

//  this.calc_area=function(){
//   return area= h*w;
//  }
//  this.calc_primeter=function(){
//   return primeter= 2*(h+w);}
// }
// var rec= new Rectangle(5,10);
// console.log(rec.calc_area());
// console.log(rec.calc_primeter());

////////////////////////


/////////task2

////task3
////decleration

var users= document.getElementById("user");
console.log(users);
var books= document.getElementById("books");
console.log(books);
var ok_btn=document.getElementById("btn1");
console.log(ok_btn);
var error= document.getElementById("errors")
console.log(error);
var bookform= document.getElementsByClassName("books-form")[0];
console.log(bookform);
var bookname= document.getElementById('book_name');
console.log(bookname);
var bookprice= document.getElementById('book_price');
console.log(bookprice);
var authorname= document.getElementById('author_name');
console.log(authorname);
var authormail= document.getElementById('author_mail');
console.log(authormail);
var submit=document.getElementById("submit");
console.log(submit);
var text=document.getElementById("txt");
console.log(text);
var text1= document.getElementById("txt1");
var text2=document.getElementById("txt2");
var text3=document.getElementById('txt3');
var tableform= document.getElementsByClassName('table')[0];
////create object//////

//validation for book numbers/////
function books_numvalidation(e){
  e.preventDefault();
if(books.value==""){
error.innerHTML=("This field is required");

}
else if(isNaN(books.value)){
  error.innerHTML=("please enter only numbers");
 
  }
  else if(books.value<1){
    error.innerHTML=("please enter valid number");
    
  }else{
    console.log(books.value);
    users.style.display="none";
    bookform.style.display="inline";
    return true;
  }

} 
ok_btn.addEventListener('click',books_numvalidation)


///// validation for books

function books_validation(){
  ////////book name validation
function name_validation(e){
    var booksname= bookname.value;
    console.log(booksname);
  if (booksname==""){
      text.innerHTML="This field is required";
      e.preventDefault();
  }
  else if(isFinite(booksname)) {
      text.innerHTML="Please enter strings only";
      e.preventDefault();
  } else if (booksname.length<3){
      text.innerHTML="please enter valid name";
      e.preventDefault();
  } else{
      console.log(booksname);
      text.innerText=""
      return true;
  }
  }
  submit.addEventListener('click',name_validation);

  //////price validation
  function price_validation(e){
        var price=bookprice .value;
        console.log(bookprice);
      if (price==""){
          text1.innerHTML="This field is required";
          e.preventDefault();
      }
      else if(isNaN(price)) {
          text1.innerHTML="Please enter numbers only";
          e.preventDefault();
      } else if (price<1){
          text1.innerHTML="please enter valid price";
          e.preventDefault();
      } else{
          console.log(price);
          text1.innerText=""
          return true;
      }
      }
      submit.addEventListener('click',price_validation);


  ////////author name validation
  function author_validation(e){
    var author_name= authorname.value;
    console.log(author_name);
  if (author_name==""){
      text2.innerHTML="This field is required";
      e.preventDefault();
  }
  else if(isFinite(author_name)) {
      text2.innerHTML="Please enter strings only";
      e.preventDefault();
  } else if (author_name.length<3){
      text2.innerHTML="please enter valid name";
      e.preventDefault();
  } else{
      console.log(author_name);
      text2.innerText=""
      return true;
  }
  }
  submit.addEventListener('click',author_validation);

//////mail validation
  function mail_validation(event){
    console.log(authormail.value);
    var author_mail=authormail.value;
    var mail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var mail_test=mail.test(author_mail);

    if(author_mail==""){
        text3.innerHTML="This field is required";
        event.preventDefault();
        }
    else if(mail_test!=true){
        text3.innerHTML="please enter valid mail";
        event.preventDefault();
        }
    else{
      console.log(author_mail);
      text3.innerText="";
      bookform.style.display="none";
      tableform.style.display="inline";
    }
}
 submit.addEventListener('click',mail_validation);

}
books_validation();
 for(i=0;i<books;i++){
  var tr= document.createElement('tr');
  var td= document.createElement('td');
  td.innerHTML= booksname;
}




