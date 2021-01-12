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

let titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'Hello'; // changes title to 'Hello' -

let odd = document.querySelectorAll('li:nth-child(odd)');
let even = document.querySelectorAll('li:nth-child(even)');

for (var i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = '#ccc'; // sets the odd li elements to grey
    even[i].style.backgroundColor = 'yellow' // sets the even li to yellow
}