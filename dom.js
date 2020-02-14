// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title =  123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID //
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME //
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < items.length; i++){
//   items[i].style.backgroundColor = '#f4f4f4';
// }

// GETELEMENTSBYTAGNAME //
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < li.length; i++){
//   li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERYSELECTOR //
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World'

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND"

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// QUERYSELECTORALL //
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even= document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i < odd.length; i++){
//   odd[i].style.backgroundColor = '#f4f4f4';
//   even[i].style.backgroundColor = '#ccc';
// }



// TRAVERSING THE DOM //
//var itemList = document.querySelector('#items');
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// childNodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// // FirstChild
// console.log(itemList.firstChild);
// // firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';


// lastChild
// console.log(itemList.lastChild);
// lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// nextSibling
// console.log(itemList.nextSibling);
// // nextElementSibling
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);
// previousElementSibling
// console.log(itemList.previousElementSibling);itemList.previousElementSibling.style.color = 'green';

// createElement

// // Create a div
// var newDiv =  document.createElement('div');

// // Add class
// newDiv.className= 'hello';

// // Add id
// newDiv.id = 'hello1';

// // Add attr
// newDiv.setAttribute('title', 'Hello Div');

// // Create text node
// var newDivText = document.createTextNode('Hello World');

// // Add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// console.log(newDiv);

// newDiv.style.fontSize = '30px';

// container.insertBefore(newDiv, h1);

// EVENTS //

// var button = document.getElementById('button').addEventListener('click', buttonClick);

// function buttonClick(e){
//   //console.log('Button clicked');
//   // document.getElementById('header-title').textContent = 'Changed';
//   // document.querySelector('#main').style.backgroundColor = '#f4f4f4';
//   //console.log(e);

//   // console.log(e.target);
//   // console.log(e.target.id);
//   // console.log(e.target.className);
//   // console.log(e.target.classList);
//   // var output = document.getElementById('output');
//   // output.innerHTML = '<h3>'+e.target.id+'</h3>';

//   // console.log(e.type);

//   //console.log(e.clientX);
//   //console.log(e.clientY);

//   //console.log(e.offsetX);
//   //console.log(e.offsetY);

//   // console.log(e.altKey);
//   // console.log(e.ctrlKey);
//   // console.log(e.shiftKey);
// }

//var button = document.getElementById('button');
//var box = document.getElementById('box');

//button.addEventListener('click', runEvent);
//button.addEventListener('dblclick', runEvent);
//button.addEventListener('mousedown', runEvent);
//button.addEventListener('mouseup', runEvent);

//box.addEventListener('mouseenter', runEvent);
//box.addEventListener('mouseleave', runEvent);

//box.addEventListener('mouseover', runEvent);
//box.addEventListener('mouseout', runEvent);

// box.addEventListener('mousemove', runEvent);

//var itemInput = document.querySelector('input[type="text"]');
//var form = document.querySelector('form');
//var select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('input', runEvent);

// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

//form.addEventListener('submit', runEvent);

//function runEvent(e){
  //e.preventDefault();
  //console.log('EVENT TYPE: '+e.type);

  //console.log(e.target.value);
  // document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';

  // output.innerHTML = '<h3>MouseX: '+e.offsetX+' </h3><h3>MouseY: '+e.offsetY+'</h3>';

  // document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)";
//}

/*
*******Part - 4 *************
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
 */

var items = document.getElementsByClassName('list-group-item');
 //items[0].style.backgroundColor = "yellow";
 items[0].style.fontWeight = 'bold';

 let input = document.querySelector('input');
 //input.value = 'Hello World!';

 let submit = document.querySelector('input[type="submit"]');
 submit.value = 'SEND';

 let listLastItem = document.querySelector('.list-group-item:last-child');
 listLastItem.style.color = 'blue';

 let listSecondItem = document.querySelector('.list-group-item:nth-child(2)');
 listSecondItem.style.color = 'orange';

 let odd = document.querySelectorAll('li:nth-child(odd)');
 for(let i = 0; i < odd.length; i++) {odd[i].style.backgroundColor = '#f4f4f4';
}

let itemList = document.querySelector("#items");
itemList.parentNode.style.backgroundColor = '#ccc';
itemList.children[2].style.color = 'cyan';

itemList.lastElementChild.style.fontWeight = 'bold';
itemList.lastElementChild.previousElementSibling.innerText = 'ITEM 4';
itemList.previousElementSibling.style.color = 'green';

let newDiv = document.createElement('div');
newDiv.className = "newdiv";
newDiv.id = 'hello1';
newDiv.setAttribute('title', 'Hello Div');
let newText = document.createTextNode('Hello World!!');
newDiv.appendChild(newText);

let myContainer = document.querySelector('header .container');
let myh1 = document.querySelector('header h1');
//let window = document.querySelector('window');
//myContainer.insertBefore(newDiv, myh1);

document.querySelector('#button').addEventListener('click', buttonClick);

function buttonClick(e) {
  //alert("Welcome On Board!");
  document.querySelector('#hello1').innerText = "Welcome On Board!!!";
  console.log(e.target);
  console.log(e.clientX);
  console.log(e.clientY);//windowa göre conumu
  console.log(e.offsetX);
  console.log(e.offsetY);//butonun üstündeki konumu
  console.log(e.altKey);//Bu tuslara basılarak tıklanırsa true döndürüyor
  console.log(e.shiftKey);
  alert(e.target.classList);
  alert(window.innerHeight);
  let output = document.getElementById('output');
  output.innerHTML = '<h3>'+e.target.id+'</h3>';
}

let button2 = document.querySelector('#button2');
button2.addEventListener('click', runEvent);
button2.addEventListener('mouseenter', runEvent);
button2.addEventListener('mousemove', runEvent);

//let itemInput = document.querySelector('input[type="text"]');
let select = document.querySelector('select');
let form = document.querySelector('form');
let filter = document.getElementById('filter');

//itemInput.addEventListener('focus',runEvent2);//click inside
//itemInput.addEventListener('blur',runEvent2);//click outside
//itemInput.addEventListener('input',runEvent2);//anything we do inside of input

select.addEventListener('change',runEvent2);

form.addEventListener('submit',runEvent2);

form.addEventListener('submit', addItem);

itemList.addEventListener('click', deleteItem);

filter.addEventListener('keyup', filterItems);


function runEvent(e) {
  console.log('Event Type:', e.type);
  output.innerHTML = '<h3>Mouse X:'+e.offsetX+'</h3><h3>Mouse Y:'+e.offsetY+'</h3>';
  document.body.style.backgroundColor = 'rgb('+e.offsetX+','+e.offsetY+',40)';//last value for the blue = 40
}

function runEvent2(e) {
  e.preventDefault();//to prevent submit page defaultly
  console.log('Event Type:', e.type);
  console.log(e.target.value);
}

function addItem(e) {
  e.preventDefault();
  let newItem = document.getElementById('item').value;
  let li = document.createElement('li');
  li.className = "list-group-item";
  li.appendChild(document.createTextNode(newItem));
  let deleteButton = document.createElement('button');
  deleteButton.className = "btn btn-danger btn-sm float-right delete";
  deleteButton.appendChild(document.createTextNode('X'));
  li.appendChild(deleteButton);

  itemList.appendChild(li);
  document.getElementById('item').value = "";
}

function deleteItem(e){
  if(e.target.className === "btn btn-danger btn-sm float-right delete" ){
    if (confirm('Are You Sure To Delete Item?')) {
      let li = e.target.parentNode;
      itemList.removeChild(li);
    }
  } 
}

function filterItems(e) {
  let text = e.target.value.toLowerCase();
  let items = itemList.getElementsByTagName('li');
  Array.from(items).forEach(function(item) {
    let itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) >= 0) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}