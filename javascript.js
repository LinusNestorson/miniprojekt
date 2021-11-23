// let buttons = document.querySelectorAll(".btn").length
// for (var i = 0; i < buttons ; i++) {
//     document.querySelectorAll(".btn")[i].addEventListener("click", function() {
//         document.querySelectorAll(".btn")[i].style.backgroundColor = "red";
//     });
// }

// function change () {
//     var buttons = document.getElementsByClassName("box")
//     buttons.classlist.toggle("changeColor")
//     console.log("ok");
// }
const myElements = document.querySelectorAll(".btn")
myElements.forEach(x => x.setAttribute("onclick", "changeColor(this.id)"))

function changeColor(id){
    document.getElementById(id).style.backgroundColor="red"
} 