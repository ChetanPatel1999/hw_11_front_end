let input = document.querySelector("#input-box");
let listContainer = document.querySelector(".list-container");
let btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    if (input.value == '') {
        alert("please enter something !")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        let span = document.createElement("span");
        span.innerHTML = "\u00D7";
        li.appendChild(span);
        listContainer.appendChild(li);
        saveData();
    }
    input.value = ""
})

listContainer.addEventListener("click", (evt) => {
    if (evt.target.tagName == "LI") {
        evt.target.classList.toggle("checked");
        saveData();
    }
    else if (evt.target.tagName == "SPAN") {
        evt.target.parentElement.remove();
        saveData();
    }
})

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showData() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();
