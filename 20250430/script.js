const cookie = document.getElementById("clicker");
const cookie_num_text = document.querySelector("h2");

let cookie_num = 0;



cookie.addEventListener("click",function(){
    cookie_num+=1;
    cookie_num_text.textContent = cookie_num;

})