const cookie = document.getElementById("clicker");
const cookie_num_text = document.querySelector("h2");

let cookie_num = 0;

cookie.addEventListener("click",make_cookie);

setInterval(make_cookie,500);

function make_cookie(){
    cookie_num+=1;
    cookie_num_text.textContent = cookie_num;
}