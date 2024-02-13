//parent element method: The parentElement property returns the parent element of the specified element.
/**HTML Nodes vs Elements
In the HTML DOM (Document Object Model), an HTML document is a collection of nodes with (or without) child nodes.

Nodes are element nodes, text nodes, and comment nodes.

Whitespace between elements are also text nodes.

Elements are only element nodes. */

// document.getElementById("child-c").parentElement.style.background = "red";

// var a = document.getElementById("child-c").parentElement;

// // var a = document.getElementById("inner").parentElement;
// //var a = document.getElementById("outer").parentElement; //return the parent of outer
// // var a = document.body.parentElement; 
// console.log(a);

//parentNode  

// document.getElementById("child-c").parentNode.style.background = "red";

// var a = document.getElementById("main").parentNode; //document return hoga , agr hm paentnode ki jga parentelement likh dein gn tu null return hoga  

// console.log(a);

//69- Children and childNodes methods 
//children return html tags 
// document.getElementById("inner").childNodes[3].style.background = "red";
// var a =document.getElementById("outer").children; //all children target
//var a =document.getElementById("outer").children[0].innerHTML; 
// var a =document.getElementById("inner").childNodes; // chldNoes return text tag also agr koi cooment bhi hga tu wo bhi return krdega 
// var a =document.getElementById("inner").childNodes[3]; 
// console.log(a);

//70- lastElementChild , firstElementChild, firstChild and lastChild mehod

//firstElementChild: jis ko bh tagret kr k hm dekhna chahty h uska first tag hoga firstChild
// var a =document.getElementById("inner").firstElementChild; 
// document.getElementById("inner").firstElementChild.style.background = "red";
// var a =document.getElementById("inner").firstElementChild.innerHTML;

// document.getElementById("outer").firstElementChild.style.background = "red";
// var a =document.getElementById("outer").firstElementChild;

// document.getElementById("inner").lastElementChild.style.background = "red";
// var a =document.getElementById("inner").lastElementChild; 

// document.getElementById("outer").lastElementChild.style.background = "red";
// var a =document.getElementById("outer").lastElementChild;

// document.getElementById("outer").lastElementChild.style.background = "red";
// var a =document.getElementById("outer").firstChild;

//styling i not poosible in firstChild and lastChild method because we can not directly style the text but we can style html tags 
// var a =document.getElementById("outer").lastChild; 
// var a =document.getElementById("child-c").lastChild;  //c return because no space
// console.log(a);

//71- nextSibling & previousSibling , nextElementSibling & previousElementSibling

// document.getElementById("child-C").previousElementSibling.style.background = "red";
// document.getElementById("child-C").nextElementSibling.style.background = "red";
// document.getElementById("child-E").nextElementSibling.style.background = "red";

// var a =document.getElementById("child-C").nextElementSibling; //d return 
// var a =document.getElementById("child-C").previousElementSibling; //b will return
// var a =document.getElementById("child-C").previousElementSibling.innerHTML; 

// var a =document.getElementById("child-C").previousElementSibling.innerHTML; 

// var a =document.getElementById("child-E").nextElementSibling; //null  becuase E has no next sibling
// var a =document.getElementById("child-head").previousElementSibling;

// var a =document.getElementById("child-C").previousSibling;//space ko  bh count krleta h 
// var a =document.getElementById("child-C").nextSibling;//space ko  bh count krleta h 
//nextSibling space bh leta ha or comment bh, jb k nextElementSibling mn comment nh ata 
// console.log(a);
