const cookie = document.getElementById("clicker");
const cookie_num_text = document.querySelector("h2");
const cookie_delta_num_text = document.getElementById("power");
const pointerBtn = document.getElementById("pointer");
const granmaBtn = document.getElementById("granma");
const farmBtn = document.getElementById("farm");



let cookie_num = 0;
let cookie_delta_num = 1;

cookie.addEventListener("click",make_cookie);
pointerBtn.addEventListener("click",function(){
    powerup(100,1);
})

granmaBtn.addEventListener("click",function(){
    powerup(1000,1);

})

farmBtn.addEventListener("click",function(){
    powerup(10000,1)
})


setInterval(make_cookie,0);
setInterval(mainloop,10);

function mainloop(){
    if(cookie_num >= 100){
        //色変更
        pointerBtn.style.backgroundColor = "red";
    }
    if(cookie_num >= 1000){
        granmaBtn.style.backgroundColor = "red";
    }
    if(cookie_num >= 10000){
        farmBtn.style.backgroundColor = "red";
    }
}

function make_cookie(){
    cookie_num+=cookie_delta_num;
    cookie_num_text.textContent = cookie_num;
}

function powerup(required_num,chenge_num){
    if(cookie_num >= required_num){
        cookie_num -= required_num;
        cookie_delta_num +=chenge_num;
        cookie_delta_num_text.textContent=cookie_num;
        cookie_delta_num_text.textContent=cookie_delta_num;
    }
}