var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//Form submit event //
form.addEventListener('submit', addItem);


itemList.addEventListener('click',removeItem);



// Add item 
function addItem(e)
   {
    e.preventDefault();
  // get input value 
  var newItem = document.getElementById('item').value;

  //create new li element
  var li = document.createElement('li');
  li.className = 'list-group-item';

  //Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  var deleteBtn = document.createElement('button');

  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  deleteBtn.appendChild(document.createTextNode('X'));

  li.appendChild(deleteBtn);

  itemList.appendChild(li);
}
function removeItem(e)
{
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}



