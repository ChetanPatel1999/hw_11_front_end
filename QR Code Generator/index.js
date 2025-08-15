const inputText = document.querySelector("#input-text")
const imageBox = document.querySelector(".image-box")
const image = document.querySelector("#image")
const btn = document.querySelector("#btn")

function generateimg() {
    if (inputText.value.length > 0) {
        let url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputText.value}`
        image.src = url;
        imageBox.classList.add("box");
        image.classList.add("out-image");
    }
    else {
        inputText.classList.add("error");
        setTimeout(() => {
            inputText.classList.remove("error");
        }, 1000)
    }
}

btn.addEventListener("click", () => {
    generateimg();
})