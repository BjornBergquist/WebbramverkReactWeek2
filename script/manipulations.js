/* Börja med att ta bort lite onödig html: */
const parent = document.querySelector("#parent");
parent.innerHTML = ""


parent.innerHTML = "<div class='child'> This is a test </child>"

const child = parent.children[0]

child.textContent = "hej!"

const div = document.createElement("div")

parent.append(div)