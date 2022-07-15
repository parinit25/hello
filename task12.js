

function saveToLocalStorage(event)
{
    event.preventDefault();
    var name = event.target.name.value;
    var email = event.target.email.value;
    var phoneNumber = event.target.phonenumber.value;

    myObj = {
        name : name,
        email : email,
        phoneNumber : phoneNumber
    }

    localStorage.setItem(myObj.email,JSON.stringify(myObj));

    displayUserDetails(myObj);
    

}



function displayUserDetails(user){

    var childHTML=`<li> ${user.name} - ${user.email}</li>`;

    var parentNode = document.getElementById('listOfUsers');
    
    parentNode.innerHTML = parentNode.innerHTML + childHTML;

}

window.addEventListener('DOMContentLoaded',(event)=>{
    Object.keys(localStorage).forEach((key => {

        const user = JSON.parse(localStorage.getItem(key))
        


        displayUserDetails(user);

    }))

});