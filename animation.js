/**82- setintevral() and clearInterval */
/*var a = 0;
 
var b = setInterval(Anim,500);

function Anim() {
    a = a + 10;
    // console.log("Hello World!");
    // console.log(a);
    
    if(a ==200){
       clearInterval(b);
        
    }else{
        var target = document.getElementById("test");
        // target.style.marginLeft = a + 'px';  
        target.style.width = a + 'px';  
    
    
    }


}*/

/*83- setTimeout */

/*var b = setTimeout(Anim, 5000);

function Anim() {
    // console.log("hello");

var target =document.getElementById("test");
target.style.width="250px"; //print only one time in setTimeout() method
}*/



var b = setTimeout(function() {
    var target =document.getElementById("test");
    target.style.width="250px";  
}, 5000);
function stopAnimation(){

    clearTimeout(b);  
}

