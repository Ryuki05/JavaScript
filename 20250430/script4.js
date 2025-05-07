const cookie = document.getElementById("clicker");
const cookie_num_text = document.querySelector("h2");
const cookie_delta_num_text = document.getElementById("power");
const pointerBtn = document.getElementById("pointer");
const granmaBtn = document.getElementById("granma");
const farmBtn = document.getElementById("farm");

let cookie_num = 0;
let cookie_delta_num = 1;

// クッキークリックで増える
cookie.addEventListener("click", make_cookie);

// クッキーの自動生成（1秒ごと）
setInterval(make_cookie, 1);
// UIの更新（色の変化や自動アップグレード）
setInterval(mainloop, 100);

// クッキーを増やす処理
function make_cookie() {
    cookie_num += cookie_delta_num;
    cookie_num_text.textContent = cookie_num;
    saveData();
}

// アップグレードの処理
function powerup(required_num, change_num, button) {
    if (cookie_num >= required_num) {
        cookie_num -= required_num;
        cookie_delta_num += change_num;
        cookie_num_text.textContent = cookie_num;
        cookie_delta_num_text.textContent = cookie_delta_num;
        saveData();
    }
}

// UI更新と自動アップグレード
function mainloop() {
    // 条件を満たすたびに自動アップグレード
    while (cookie_num >= 10000) {
        cookie_num -= 10000;
        cookie_delta_num += 10;
    }
    while (cookie_num >= 1000) {
        cookie_num -= 1000;
        cookie_delta_num += 5;
    }
    while (cookie_num >= 100) {
        cookie_num -= 100;
        cookie_delta_num += 1;
    }

    // UI更新
    pointerBtn.style.backgroundColor = cookie_num >= 100 ? "red" : "darkgray";
    granmaBtn.style.backgroundColor = cookie_num >= 1000 ? "red" : "darkgray";
    farmBtn.style.backgroundColor = cookie_num >= 10000 ? "red" : "darkgray";

    cookie_num_text.textContent = cookie_num;
    cookie_delta_num_text.textContent = cookie_delta_num;

    saveData();
}

// ローカルストレージに保存
function saveData() {
    localStorage.setItem("cookie_num", cookie_num);
    localStorage.setItem("cookie_delta_num", cookie_delta_num);
}

// 保存データを読み込む
window.addEventListener("load", function () {
    const savedCookies = localStorage.getItem("cookie_num");
    const savedDelta = localStorage.getItem("cookie_delta_num");

    if (savedCookies != null) {
        cookie_num = parseInt(savedCookies, 10);
        cookie_num_text.textContent = cookie_num;
    }
    if (savedDelta != null) {
        cookie_delta_num = parseInt(savedDelta, 10);
        cookie_delta_num_text.textContent = cookie_delta_num;
    }
});
