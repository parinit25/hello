//Answer 1//

var secondItem = document.querySelectorAll('.list-group-item');
secondItem[1].style.backgroundColor = "green";

//Answer 2// 

for (var i=0 ;i<secondItem.length;i+=2)
{
    secondItem[i].style.backgroundColor="green";
}

//Answer 3//


/*
Difference between querySelector and querySelectorAll
1. querySelector selects only one element and querySelector all selects multiple
elements in at once like getElementsByTagName and getElementsByClassName */