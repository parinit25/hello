

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
    console.log(localStorage);

}