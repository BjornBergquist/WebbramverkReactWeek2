












































/* Nytt för torsdag börjar här: 
const hamburger = document.querySelector(".hamburger")
const nav = document.querySelector(".mainnav ul")

console.log(hamburger);
console.log(nav);

hamburger.setAttribute("onclick", "openHamburger()")

const openHamburger = () => {
    if (hamburger.classList.contains("hamburger--open")){
        hamburger.classList.remove("hamburger--open")
        nav.classList.remove("mainnav--open")
    } else {
        hamburger.classList.add("hamburger--open")
        nav.classList.add("mainnav--open")
    }
} /* */