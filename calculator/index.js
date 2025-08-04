let input = document.querySelector("#input-box")
let buttons = document.querySelectorAll("button")

let string = ""
buttons.forEach(button => {
    button.addEventListener("click", evt => {
        let val = evt.target.innerHTML;
        console.log(val)
        if (val == '=') {
            string = eval(string);
            input.value = string;
        }
        else if (val == 'AC') {
            string = ""
            input.value = string
        }
        else if (val == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string
        }
        else {
            string = string + val;
            input.value = string;
        }
    })
})