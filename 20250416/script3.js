const dispArea =
document.querySelector("#display-area");

for(let x = 1; x <= 3; x++){
    for(let i = 1; i <= 10; i++){
        dispArea.innerHTML += `<p>${x}年${i}組<p>`;
    }
}