function saveToLocalStorage(event) {
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.emailId.value;
    const phoneNumber = event.target.phoneNumber.value;
    const obj = {
        name, 
        email,
        phoneNumber
    }
    localStorage.setItem(obj.email, JSON.stringify(obj));
    showNewUserOnScreen(obj)
}
window.addEventListener('DOMContentLoaded', (event) => {
    Object.keys(localStorage).forEach(key => {
        const user = JSON.parse(localStorage.getItem(key))
        showNewUserOnScreen(user)
    })
});

function showNewUserOnScreen(user) {
    // console.log(localStorage.getItem(user.email));
    if(localStorage.getItem(user.email)!== null) {
        removeUserFromScreen(user.email);
    }
    const parentNode  = document.getElementById('listOfUsers');
    const childHTML = `<li id=${user.email}> ${user.name} - ${user.email} - ${user.phoneNumber}
    
    <button onclick=editUserDetails('${user.name}','${user.email}','${user.phoneNumber}')>Edit Details</button>
    <button onclick=deleteUser('${user.email}')> Delete User</button>
    </li>`
    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

function deleteUser(emailId) {
    localStorage.removeItem(emailId);
    removeUserFromScreen(emailId);
}
function removeUserFromScreen(emailId) {
    const parentNode = document.getElementById('listOfUsers');
    const childNodeToBeDeleted = document.getElementById(emailId);
    if(childNodeToBeDeleted) {
        parentNode.removeChild(childNodeToBeDeleted);
    }
}
function editUserDetails ( username, emailId, phoneNumber) {
    document.getElementById('username').value = username;
    document.getElementById('emailId').value = emailId;
    document.getElementById('phoneNumber').value = phoneNumber;

    deleteUser(emailId);
}