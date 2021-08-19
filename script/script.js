/* En funktion som lägger till en klass
som byer bakgrundsfärg på ett element*/
const changeColor = (element) => {
   element.classList.add("red") 
}

//const parent = document.getElementById("parent")
//changeColor(parent)

//const children = Array.from(document.getElementsByClassName("child"))


// const child3 = document.querySelector("#child-three")

// const grandchildren = Array.from(children[0].children)

// grandchildren.forEach((child) => changeColor(child))

// const parent = grandchildren[0].closest("#parent")

// changeColor(parent)

// const child2 = child3.previousElementSibling

//changeColor(child2)

// const div = Array.from(document.getElementsByTagName("div"))

const children = document.querySelectorAll(".child")
// children.forEach((child) => child.onclick = (event) => {child = document.getElementById(id)
//    child.classList.contains("red") ? child.classList.remove("red") : 
//    child.classList.add("red") })
children.forEach((child) => child.setAttribute("onclick",`myFunc(this.id)`))

function myFunc(id){
   child = document.getElementById(id)
   child.classList.toggle("red")
}

// let active = false;
// let children = document.getElementById("parent").children;

// for(var i = 0; i < children.length; i++)
// {
//    children[i].onclick = function(event)
//    {
//       if(active == false)
//       {
//          for(var j = 0; j < children.length; j++)
//          {
//             children[j].classList.add("red");
//          }
//          active = true;
//       }
//       else
//       {
//          for(var j = 0; j < children.length; j++)
//          {
//             children[j].classList.remove("red");
//          }
//       }
//    }
// }