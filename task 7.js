// Traversing the DOM//



var itemList = document.querySelector('#items');

//Parent Node//

// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';

// console.log(itemList.parentNode.parentNode.parentNode);

//ChildNode
// console.log(itemList.childNodes); includes text and line break

// console.log(itemList.children);
// itemList.children[1].style.backgroundColor='yellow';

// //First child//
// console.log(itemList.firstChild); //includes text and line break

// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent="Hello";

// Last child element//
// itemList.lastElementChild.textContent = "Last Child";

//Next element Sibling //
// console.log(itemList.nextElementSibling);

//Previous Sibling//
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

//CreateElement by dOM 
//Create a div//
var newDiv = document.createElement('div');

//Add class

newDiv.className = 'hello';

//Add ID

newDiv.id= 'hello1';

//Add attr
newDiv.setAttribute('title','Hello Div');

//Create text node
var newDivText = document.createTextNode('Hello World');

// Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');

var h1 = document.querySelector('header h1');

console.log(newDiv);

container.insertBefore(newDiv,h1);

newDiv.style.fontSize='60px';



