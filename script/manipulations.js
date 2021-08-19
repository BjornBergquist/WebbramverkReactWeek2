/* Börja med att ta bort lite onödig html: */
const parent = document.querySelector("#parent");
parent.innerHTML = "<div class='child'> Hej! </child>"

const child = document.querySelector(".child")

const grandchild = document.createElement("div")

child.append(grandchild)

grandchild.classList.add("red")
grandchild.classList.add("grandchild")
grandchild.classList.remove("red")
