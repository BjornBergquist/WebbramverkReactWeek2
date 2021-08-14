/* Börja med att ta bort lite onödig html: */
const parent = document.querySelector("#parent");
const children = Array.from(parent.children)
children.forEach((child) => child.remove())