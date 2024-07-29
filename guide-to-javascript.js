/*!

    Please note that java != javascript, these
    languages may have some similarities
    but certainly aren't related to each other
    in any way, for example, in js we can use "", '', as well as ``
    for Strings, but in java only "" is allowed whereas '' are used
    for char literals. Also js does not have a main function etc.

    You can use NotePad or Notepad++ for coding in js, though for large scale 
    development over 500 lines of code, like this one, I recommend using Microsoft's
    VS Code, which features syntax highlighting and will tell you bugs as you code along :)

    You can also customize it with themes, debuggers, exporters, error highlighters etc. Personally for development I use
    the 'one dark pro' theme, 'material icon theme' as well as a this extension by the name 'better comments', which basically makes comments with 
    a //! next to them be visible

*/

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

//  What is js? Think of html like a car. It adds a basic framework to the car but
//  fails in other aspects like color, setbelts etc. Likewise HTML is the basic starting point/structure
//  of a web-page. Now in order to add some color and make your car presentable, you decorate it, add a radio, a gps system
//  paint the car, add fancy lights etc. To do that CSS is what is used in a web-page.
//  So finally, we have a pretty car, but can it move? In order to make it functional we put in an engine and add controls, so in
//  web-development, after making a pretty website, in order to add functional feautures like login, pop-ups, verification or basically anything, we use javascript.

//!  Ok but how do you write js? Let's learn with a simple project:

/*
    <html>
        <head>
            <!-- Dummy content -->
        </head>
        <body>
            <h1 id="greetingd"> Hello World! </h1>

            <script>
                document.getElementById('greetings').textContent = 'Hello Again!';
            </script
        </body>
    </html>
*/

// javascript is writtem inside <script></script> tags inside your html file. Or if your script is long, then in the "same" folder you can create
// a file ending with .js and reference it inside your html, kinda like this: <script src="path\to\your\js\file"> </script>

//okay so we have our files ready, what do we do? Almost everything in js is controlled by the document object, you donot
//need to create it like this: document dcmnt = new document(); js already does that for you :) instead all you need to do is grab what element's content you want to change:

document.getElementById("some_element_whose_content_has_to_be_changed");

//Now that you have your element grabbed, we can change things dynamically on by using some built in functions:

document.getElementById("any_valid_text_element").textContent =
    "anything you want";
document.getElementById("any_valid_element_you_want_to_style").style.color =
    "blue"; //in fact, you can change any style not just color!

//now let's say we need to store the amount of coins a user has, for that we'll need a variable:

//js uses dynamic type system, for example this is a declaration in java: int num1; whilst in js we
//donot need to spefify the type directly, the interpreter will automatically figure it out

let coinsLeft = 2355; //variables with let can be re-declared whilst the ones with const can't
const maxSpending = 368; //similar to final keyword in java
let enoughCoins = true;
let name = "Max";
let friends = ["julia", "rishab", "michael", "harshit"]; //an array can be of a string as well and to access it: friends[0];

//now let's say you want to create an element, suppose if the user on your website wants to create his/her own custom profile, for that we can use <input> elements using html and ask for the inputs accordingly!

//! In html: <h1> What should be your Profile Name? </h1> <input id="profile_name">

//! In js:

let profileName = document.getElementById("profile_name").textContent; //first storing the profile name entered by the user
let newElement = document.createElement("div"); //creating a new container for the name (div)
let nameInsideNewElement = document.createElement("h1");
nameInsideNewElement.textContent = profileName; //setting the text of the newly made element to the name enetered by user
newElement.appendChild(nameInsideNewElement); //finally adding the name to container
document.appendChild(newElement); //adding the container to the html document

//let's move onto if-else, switches and loops which are same:

if ("something" > "something else") {
    //do this
} else if ("something else" == "something") {
    //do this
} else {
    //or do something else
}

let someVariable = document.getElementById("userChoice").textContent;
switch (someVariable) {
    case 1: //do this
        break;
    case 4: //do this
        break;
    default:
    // do nothing
}

while (someVariable <= 34) {
    console.log("wrong choice"); //console.log(); is basically like .println();
}

for (let i = 0; i <= 20; i++) {
    //do something 20 times
}

//there's also a Math library with similar functions:
console.log(Math.pow(2, 6));
window.alert(Math.floor(Math.random())); //window object is used to interact with the web browser and the alert() method will open up a dialog box

//other important features:

console.log(3 ** 5); //3 to the power of 5
let a = "6";
let new_a = parseInt(a); //type conversion from string to int, undefined or error is cannot be converted
// strict equality === compares and retues true if both sides are of the same data type, for example:

if (1 == "1") {
    //will retuen true
}
if (1 === "1") {
    //will return false
}

//now functions, unlike java you don't have to have a specific retuen type:
//also unlike java, we donot need to add 'let' before the arguments
function functionName(length, breadth) {
    document.getElementById("result").textContent = "Area: ";
    return length * breadth;
}

//! Now let's get to the 'main' method, or the lack of it....
// js does not have a main method by default, although for any piece of code to execute 'before'
// the website loads, we can use the following syntac:

document.addEventListener("DOMContentLoaded", function () {
    //execute something before the content loads
});

//coming to action ;listeners, they basically listen to 'events' like 'click', mousemove etc, and call a function is one happens:

//suppose we have a button by the id 'btn', and we want a popup to appear when we click it,
//till now every function we wrote would have only executed when 'called' upon, like: functionName(34,66);
//but we can add an event listener to our button to call a function when the 'user' calls it, i.e clicks on the button:

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btn").addEventListener("click", doSomething); //doSomething function executes when the button is clicked
});

function doSomething() {
    window.alert("Hello World!");
}

//And that concludes all of javascript basics :)
