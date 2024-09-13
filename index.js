let botton = document.getElementById("b")
let text = document.getElementById("number")

let count = 0

function update_text()
{
    text.innerText = count
}

function clicked()
{
    count++
    update_text()
}