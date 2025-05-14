const loading = document.querySelector("#loading");
const gallery = document.querySelector(".gallery");
const modalImg = document.querySelector("#modalImg")

function insertPicture() {
    for (let i = 1; i <= 10; i++) {
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        
        let newImage = document.createElement('img');
        newImage.src = `images/${String(i).padStart(3, '0')}.jpg`;
        
        newItem.appendChild(newImage);
        gallery.appendChild(newItem);
    }
}

window.addEventListener("load", () => {
    insertPicture();
    loading.classList.add('loaded');
});

gallery.addEventListener("click",(e)=>{
    if(e.target.tagName = "IMG"){
        modal.classList.remove("hidden");
        modalImg.src = e.target.src;
    }
})

modalClose.addEventListener("click",()=>{
    modal.classList.add("hidden");
})