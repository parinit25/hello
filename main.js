

function saveToLocalStorage(event)
{
    event.preventDefault();
    var name = event.target.name.value;
    var email = event.target.email.value;
    var phoneNumber = event.target.phonenumber.value;

    localStorage.setItem("name",name);
    localStorage.setItem("email",email);
    localStorage.setItem("phoneNumber",phoneNumber);

}