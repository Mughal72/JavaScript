
// var newElement = document.createElement("h2"); //createElement will create paragraph

// var newText = document.createTextNode("Thsi is just tetx");

// var newText = document.createTextNode("Thsi is just tetx");
// console.log(newText);

//  var newComment = document.createComment("This is comment");
// console.log(newComment);


// newElement.appendChild(newText);  //textElement ko newElement k sath append kia 


// document.getElementById("test").appendChild(newElement); //jo bh hm apend krein gn wo hmesha last mn e display hoga
// document.getElementById("test").appendChild(newComment); //html mn ye comment show hoga

// var target = document.getElementById("test");
//insert before method use krein gn agr hm bech mn ya starting mn append krna chahty hn 
// target.insertBefore(newElement, target.childNodes[0]); //pehly heading a rh phr para 
// console.log(newElement);


//74- insertAdjacentElement(), insertAdjacentHTML(), insertAdjacentText() they will create and append
//dom insertAdjacent Positions:
//1- beforbegin 2- afterbegin 3- beforeend 4- afterend

// var newElement = document.createElement("h2");
// //create Text Node 
// var newText = document.createTextNode("Thsi is just Text");

// newElement.appendChild(newText);

// now apend textnode into element

// var target = document.getElementById("test");
//adjacenthtml method
// var newElement = "<h2>This is Heading</h2>";

//insertadjacentText
// var newText = "This is heading";

// target.insertAdjacentElement("beforebegin", newElement);
// target.insertAdjacentElement("afterbegin", newElement);
// target.insertAdjacentHTML("afterend", newElement);//div k en dmm ajai g heading
// target.insertAdjacentText("beforeend", newText);


/*75- JavaScript ReplaceChild*/

/*var newElement = document.createElement("li");

var newText = document.createTextNode("WOW new Text");

newElement.appendChild(newText);

var target = document.getElementById("list");

var oldElement = target.children[0];


// console.log(oldElement);

target.replaceChild(newElement,oldElement);*/

/*75- JavaScript RemoveChild*/

/*var target = document.getElementById("list");

var oldElement = target.children[0];

target.removeChild(oldElement);*/

/*76- DOM cloneNode() */
/* JavaScript CloneNode*/

/*var target = document.getElementById("list1").children[0];

var copyElement = target.cloneNode(true);//by-default false, flase mn sirf tag or attributes ko return krta hai , iner value ko b print kry ga true 

console.log(copyElement);


document.getElementById("list2").appendChild(copyElement);

document.getElementById("test").appendChild(copyElement);*/

/*77- JavaScript Contains Method*/

/*var parentElement = document.getElementById("test");

var target=document.getElementById("abc");

var find = parentElement.contains(target);

console.log(find);*/

/*javascript hasAttribute */

/*var target = document.getElementById("test");

var find =target.hasAttribute("class");

console.log(find);*/

/* JavaScript hasChildNodes*/

/*var target  = document.getElementById("test");

var find = target.hasChildNodes();// true becasue it has child

console.log(find);*/

/*79- dom isEqualNode() */

var target1 = document.getElementById("list-1").firstElementChild;
var target2 = document.getElementById("list-2").children[1];

var equal = target1.isEqualNode(target2);

console.log(equal); 






