//HTMLと組み合わせて使う
const now = new Date();
// alert(`いまは${now}デス`);

//DOM操作
const h1 = document.querySelector("h1");

let forHere = confirm('店内ご利用ですか？');
let taxRate = calc(forHere);
if(forHere){
    console.log("かしこまり");
}else{
    console.log("テイクアウトですね");
}
console.log(`税率${taxRate}`);
h1.textContent = `お会計は${600 * taxRate}円です`;

function calc(here){
    let tax = 1.08;
    if(here){
        tax = 1.1;
    }
    return tax;
}