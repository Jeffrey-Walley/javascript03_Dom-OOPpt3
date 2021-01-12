/* DOCUMENT OBJECT MODEL 
  --Tree of the NODES(elements) created by the browser.
  --JS can be used to read / write / manipulate the DOM
  --Object Oriented Representation */

//  console.dir(document);  examines the document object

/* console.log(document.domain); // console.log web domain address
console.log(document.URL); // console.log URL address (http://127.0.0.1:5500/dom.html) in this ex:
console.log(document.title); // console.log title of HTML document
console.log(document.doctype); // console.log <!DOCTYPE html>
console.log(document.head); // console.log info in <head> of
console.log(document.all); // console.log the indexed content of the DOCUMENT
console.log(document.forms); // console.log the forms */

// DOM SELECTORS -----------------------------------------------------

// getElementById --------------------------------
// let headerTitle = document.getElementById('header-title');
// let header = document.getElementById('main-header');
/* console.log(headerTitle);

// TextSelectors=============================================
headerTitle.textContent = 'Hello';
headerTitle.innerText = 'LIST \'EM';
headerTitle.innerHTML = '<h5>LIST \'EM</h5>'; */ // exploring some selectors

// STYLE Selctors=============================
// header.style.borderBottom = 'solid 3px #000' //adds boder - camelCase replaces some css properties(border-bottom)


// getElementsByClassName=======================================
/* let items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Wassup Wit \'Em';
items[1].style.fontWeight = 'bold';
items[2].style.backgroundColor = 'yellow';

for (let i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = '#f4f4f4';
}; */ // sorts through all the item fields and set the background color to grey - must sort through field in DOM

/* let li = document.getElementsByTagName('li');
console.log(li);
li[1].textContent = 'Dis is \'Em';
li[1].style.fontWeight = 'bold';

for (var i = 0; i < li.length; i++) {
    li[i].style.backgroundColor = 'f00';
}; */ // getElementsByTagName




//  querySelector============================================================

/* let header = document.querySelector('#main-header'); // selects #main-header #id
header.style.borderBottom = 'solid 4px #f00'; // adds red border

let input = document.querySelector('input');
input.value = 'Hello World'; // 'querySelector' only grabs the 1st 'input' in this ex:

let submit = document.querySelector('input[type="submit"]');
submit.value = "SEND" // sets 'submit' to 'send' in the button 

let item = document.querySelector('.list-group-item');
item.style.color = 'red'; // sets text in 1st list-group-item 'red'

let lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue'; //sets text in last list-group-item to 'blue'

let secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'yellow'; */ //sets text in the 2nd list-group-item 'yellow' - using 'nth-child'


// querySelectorAll

/* let titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'Hello'; // changes title to 'Hello' -

let odd = document.querySelectorAll('li:nth-child(odd)');
let even = document.querySelectorAll('li:nth-child(even)');

for (var i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = '#ccc'; // sets the odd li elements to grey
    even[i].style.backgroundColor = 'yellow' // sets the even li to yellow
} 
*/

// Traversing the DOM


// parent Node
// console.log(itemlist.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';

// --parentElement ----------------------------same as parentNode

// --childNode --------------------------------------------------------

// console.log(itemlist.childNodes);
let itemList = document.querySelector('#items');

// console.log(itemlist.children);-- doesn't give the text blank space ((use .children NOT childNodes))

itemList.children[1].style.backgroundColor = 'yellow';
//--turns the 'Em 2 item background to yellow

// console.log(itemList.firstElementChild); // gives first element child
itemList.lastElementChild.textContent = "Dun'tit";
// console.log(itemList.nextElementChild); -- console.log of undefined due to there being no additional elements
// console.log(itemList.previousElementSibling); -- will display h2
itemList.previousElementSibling.style.color = 'red'; //--turns "Them 'EMs" to red

// --Create Element--------------------------------------------------

let newDiv = document.createElement('div');

newDiv.className = 'Howdy';
newDiv.id = 'hello1';
newDiv.setAttribute('title', 'Howdy Div');

// --Create Text-----------------------------------------------------------------
let newDivText = document.createTextNode('Hello World');

// --Add text to div-------------------------------------------------------------
newDiv.appendChild(newDivText);

// --Insert added divs to the DOM-----------------------------------------------
let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');

container.insertBefore(newDiv, h1);
newDiv.style.fontSize = '30px'; // makes font of newDiv 30px
console.log(newDiv);

// --EVENTS---------------------------------------------------------------------

// --Event Listeners------------------------------------------------------------

/* let button = document.getElementById('button').addEventListener('click', buttonClick);

/* function buttonClick() {
    //console.log('Button Clicked');
    document.getElementById('header-title').textContent = 'List \'Em Head';
    document.querySelector('#main').style.backgroundColor = 'skyblue';
}; */ //-- function that sets "buttonClick" to change the header-title and main background when button is clicked

/* function buttonClick(e) {
    // console.log(e); -- shows all events when button is Clicked
    /* console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.classList);
    let output = document.getElementById('output')
    output.innerHTML = '<h3>' + e.target.id + '</h3>'; // outputs "button" on web display when button is clicked

    console.log(e.type); // cosonle logs as "click"

    console.log(e.clientX); // gives mouse pointer position on X-axis in the window
    console.log(e.clientY); // gives mouse pointer position on Y-axis in the window
    console.log(e.offsetX); // gives mouse pointer position on X-axis in relation to the element itself
    console.log(e.offsetY); // gives mouse pointer position on Y-axis in relation to the element itself

console.log(e.altKey); // checks for alt-key hold down while pushed and gives true / false
console.log(e.ctrlKey); // checks for ctrl-key hold down while pushed and gives true / false
console.log(e.shiftKey); // checks for shift-key hold down while pushed and gives true / false

}; */

let button = document.getElementById('button');
let box = document.getElementById('box');


// button.addEventListener('click', runEvent); //consle log - 'EVENT TYPE: click'
button.addEventListener('dblclick', runEvent); //consle log - 'EVENT TYPE: dblclick' when double clicked
// button.addEventListener('mousedown', runEvent); //consle log - 'EVENT TYPE: mousedown' - doesn't wait for click, shows 'mousedown' as soon as the button is held down
button.addEventListener('mouseup', runEvent); //consle log - 'EVENT TYPE: mouseup' opposite of mousedown

box.addEventListener('mouseenter', runEvent); //consle log - 'EVENT TYPE: mouseenter' in the box div
// box.addEventListener('mouseleave', runEvent); //consle log - 'EVENT TYPE: mouseleave' 

box.addEventListener('mouseover', runEvent); //consle log - 'EVENT TYPE: mouseover' - fires off over the <h3> element
// box.addEventListener('mouseout', runEvent); //consle log - 'EVENT TYPE: mouseout' 

box.addEventListener('mousemove', runEvent); // 'EVENT TYPE: mousemove' fires off when the mouse moves in the box div -- you can grab the cursor postion from this information and output it as follows


function runEvent(e) {
    e.preventDefault(); // allows the submit to be held
    console.log('EVENT TYPE: ' + e.type);

    console.log(e.target.value);
    document.getElementById('output').innerHTML = '<h3>' + e.target.value + '</h3>';
    // will output your keystrokes in the form field onto the html

    // output.innerHTML = '<h3>MouseX: ' + e.offsetX + ' </h3><h3>MouseY: ' + e.offsetY + ' </h3>'; // displays mouse cursor coordintates  in the HTML (under Them 'EMs)

    box.style.backgroundColor = "rgb(" + e.offsetX + ", " + e.offsetY + ",40)"; // div box will change color as you scroll through it 

    document.body.style.backgroundColor = "rgb(" + e.offsetX + ", " + e.offsetY + ",40)"; // background body will change color as you scroll through the div box 
};

const itemInput = document.querySelector('input[type="text"]');
const form = document.querySelector('form');
const select = document.querySelector('select');

/* itemInput.addEventListener('keydown', runEvent); // runs when keyboard key is pushed in form
itemInput.addEventListener('keyup', runEvent); // runs when keyboard key is released in form
itemInput.addEventListener('keypress', runEvent); */ // runs when keyboard key is pressed down in form

/* itemInput.addEventListener('focus', runEvent); // click in the form field console log 'focus'
itemInput.addEventListener('blur', runEvent); // click off the form field console log 'blur'

itemInput.addEventListener('cut', runEvent); // when someone cuts then it console.log
itemInput.addEventListener('paste', runEvent); // when someone paste

itemInput.addEventListener('input', runEvent); // for any input in the form field */

select.addEventListener('change', runEvent);
select.addEventListener('input', runEvent);

form.addEventListener('submit', runEvent);