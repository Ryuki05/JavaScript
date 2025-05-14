const picker = document.querySelector("#colorPicker");
const text = document.querySelector("#colorText");
const randomBtn = document.querySelector("#button");
let interval = 0;

picker.addEventListener("input", () => {
    document.body.style.backgroundColor = picker.value;
    text.style.color = picker.value;
    text.textContent = `カラーコード:${picker.value}`;
});

function getRandomHexColor() {
    const randomColor = Math.floor(Math.random() * 0xFFFFFF);
    return "#" + randomColor.toString(16).padStart(6, "0");
}

randomBtn.addEventListener("click", () => {
    interval = setInterval(()=>{
        const color = getRandomHexColor();
        picker.value = color;
        picker.style.color = color;
        document.body.style.backgroundColor = color;
        text.style.color = color;
        text.textContent = `カラーコード:${color}`;
    },10);
    
});
