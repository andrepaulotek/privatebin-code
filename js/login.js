document.addEventListener("click", loginListener);

function loginListener(event){
    var element = event.target;
    if(element.id == "loginButton") {
        location.href = "/login";
    } else if(element.id == "logoutButton") {
        location.href = "/login/logout";
    }
}