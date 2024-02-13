var element;

/* dom targetd methods */

// element = document; html document show kry ga 

//element = document.all; // this will print all the tags of our htm document in an array form

// element = document.head; //head tga showkry ga html document ka console mn

// element = document.title; // title tag will show in the console 

// element  = document.body;

// element = document.links;// anchor will show

// element = document.images;

// element = document.forms;

// element =document.doctype; //html doctype will return

// element = document.URL;  //our website url will print

// element = document.domain; //The domain property returns the domain name of the server (the document was loaded from).The domain property returns null if the document was created in memory. 

// element = document.all[9]; //html 9 number tag targeted

// element = document.baseURI; /*The baseURI property returns the base URI of the document.The baseURI property is read-only. */

/* Main targeting Methods */
// element = document.getElementById("header");

// element = document.getElementsByClassName("list")[0]; 

// element = document.getElementsByTagName("ul"); //by tag
// console.log(element);

/* Tut63: DOM get methods*/

// element = document.getElementById("content").innerText;
// The innerText property sets or returns the text content of an element.

// element = document.getElementById("header").innerHTML;
// The innerHTML property sets or returns the HTML content (inner HTML) of an element.

// element = document.getElementById("header").getAttribute("onClick");
// The getAttribute() method returns the value of an element's attribute.

// element = document.getElementById("header").getAttributeNode("style").value;
//for checking only th evalueof attribute thne vlaue method will be use in getAttributeNode method

/*The getAttributeNode() method returns an element's attribute.
The getAttributeNode() method returns an Attribute object. */


// element = document.getElementById("header").attributes[2].value;
//element = document.getElementById("header").attributes[1].name; //attribute name will return 

/* The attributes property returns a collection of attributes in an element.
The attributes property returns a NamedNodeMap.

NamedNodeMap
A NamedNodeMap is an array-like unordered collection of an element's attributes.
In other words: a NamedNodeMap is a list of Attr objects.
A NamedNodeMap has a length property that returns the number of nodes.
The nodes can be accessed by name or index numbes. The index starts at 0.*/


/* DOM set methods
. innerHTML 
. innerText 
. setAttribute 
. Attribute
. removeAttribute */

/*To set the value of innerHTML property, you use this syntax:
element.innerHTML = newHTML;
The setting will replace the existing content of an element with the new content. */

// element =document.getElementById("header").innerHTML;
//console.log(element);

// element =document.getElementById("header").innerHTML = "<h1>wow<h1>"; //myblog heading change to wow 
//inner html mn h1 ki heading change hojai gi agr hm innerText likhty tu ye set nh krta html tag ki value inner html mn  
// element =document.getElementById("header").innerHTML;
///console.log(element);


/*The setAttribute() method sets a new value to an attribute.
If the attribute does not exist, it is created first. */

/*document.getElementById("header").innerHTML = "<h1>wow<h1>"; //myblog heading change to wow
document.getElementById("header").setAttribute("style","border:10px dotted yellow");//abc class change to xyz
document.getElementById("header").getAttribute("class");
console.log(element);*/

/*element =document.getElementById("header").innerHTML = "<h1>wow<h1>";
element = document.getElementById("header").attributes[1].value = "xyz";
element = document.getElementById("header").getAttribute("class");
console.log(element);*/

/*document.getElementById("header").innerHTML = "<h1>wow<h1>";
 
document.getElementById("header").setAttribute("style","border:10px dotted yellow");

document.getElementById("header").removeAttribute("style");

document.getElementById("header").removeAttribute("class");

element = document.getElementById("header").getAttribute("class");

console.log(element);*/

/*Summary
Use innerHTML property of an element to get or set HTML contained within the element.
The innerHTML property returns the current HTML source of the element, including any change that has been made since the page was loaded.
Do not use innerHTML to set new content that you have no control over to avoid a security risk. */

/*DOM querySelector() and querySelectorAll() */

//document.querySelector("#header").innerHTML = "<h1>wow<h1>";
 
// element = document.querySelector("#header").getAttribute("class");

//element = document.querySelector(".list");//id select
//element = document.getElementsByClassName("list");//array return hoga classname se

//element = document.querySelectorAll(".list")[1].innerHTML;//p wil get with innerhtml of p 
// element = document.querySelectorAll("ul")[1].innerHTML;

//css advance selectors
/*element = document.querySelectorAll("#header h1")[1].innerHTML;
console.log(element);*/

//65- dom css styling method:
//1- Style

//by using style method we can aslo set aany value in any html tag
// document.querySelector("#header").style.backgroundColor="tan";
// document.querySelector("#header").style.color="blue";


// element = document.querySelector("#header").style.border; //header mn jo style property h usk border ko show key  ga console m 

// console.log(element);  

//2- className method:
// document.querySelector("#header").className = "abc xyz"; //multiple class will create in header
// element = document.querySelector("#header").className;

// console.log(element);

//3- classList 
// document.querySelector("#header").classList.add("xyz","efg"); //multiple class will create in header
// document.querySelector("#header").classList.remove("efg");//efg lass will remove
// element = document.querySelector("#header").classList; //return array

// //classList has its own methods
// console.log(element);

//66- assigning events using html dom, classList Methods

// document.getElementById("header").onmouseenter = abc; //abc function create

// function abc(){

// //jb hm header pr click krein tu header ka color change hojai 
// document.getElementById("header").style.background="green";
//}

//dom addEvnetListener Method:
// document.getElementById("header").addEventListener("mouseenter", abc);
// document.getElementById("header").addEventListener("click", abc);
// document.getElementById("header").addEventListener("click", function(){
//     // document.getElementById("header").style.border="10px solid red";   
//     this.style.border="10px solid red";   
// //mulitple same event can aso called it only possible in addeventlistener
// });

// function abc(){

//     document.getElementById("header").style.background="green";

// }

//dom addEvnetListener Method: addEventListener(event,function, useCapture);
//useCapture has true&false value only 

//dom removeEventListener Method: element.emoveEventListener("ondblclick",functionName);

// document.getElementById("header").addEventListener("mouseleave", abc);

// document.getElementById("header").addEventListener('click', xyz);
// function abc() {
//     document.getElementById("header").style.background="green";
// }

// function xyz() {
//     document.getElementById("header").removeEventListener('mouseleave', abc);
// }

//67- classList() methods

// document.getElementById("header").addEventListener('click', abc);
//  function abc() {
//     // document.getElementById("header").classList.add("xyz", "efg");
//     document.getElementById("header").classList.remove("xyz");
//     var a = document.getElementById("header").classList;
// console.log(a); 
// }

//toogle  and length method
// document.getElementById("header").addEventListener('click', abc);
//   function abc() {
//      // document.getElementById("header").classList.add("xyz", "efg");
//     // document.getElementById("header").classList.remove("xyz");
//      var a = document.getElementById("header").classList.length;
// console.log(a); //3 print becuase 3 class in html header tag
//  }

 //toogle

//  document.getElementById("header").addEventListener('click', abc);
//   function abc() {
//      document.getElementById("header").classList.toggle("xyz");

//      var a = document.getElementById("header").classList.length;
// console.log(a);

//   }
  
//item method

//   document.getElementById("header").addEventListener('click', abc);
//   function abc() {
//     //  document.getElementById("header").classList.toggle("xyz");

//      var a = document.getElementById("header").classList.item(1);
// console.log(a);
// }

//conatins(class) method: class check krne k lie true false willl return

// document.getElementById("header").addEventListener('click', abc);
//   function abc() {
//     //  document.getElementById("header").classList.toggle("xyz");

//      var a = document.getElementById("header").classList.contains("abc");
// console.log(a); //checking abc class is existing or not
// }