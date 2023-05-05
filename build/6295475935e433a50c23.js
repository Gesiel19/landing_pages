// escuchar el eveneto clic en los botones 
var getContainerUl1 = document.querySelector(".ulFeatures_div");
var getContainerUl2 = document.querySelector(".ulCompany_div");
document.addEventListener("click", function (event) {
  console.log("sii");
  if (event.target.classList.contains("buttonDown1")) {
    console.log("aiuda");
    var printDropDown = function printDropDown(container) {
      container.innerHTML = "";
      container.innerHTML += "\n            <div>\n        <ul>\n        <li>  \n            <figure>\n               <img class=\"buttonDown\" src=\"./assest/icon-todo.svg\">\n           </figure> \n           <a> Todo List  </a>\n        <li>  \n            <figure>\n               <img src=\"./assest/icon-calendar.svg\">\n           </figure> \n           <a> Calendar </a>\n        <li>  \n            <figure>\n               <img src=\"./assest/icon-reminders.svg\">\n           </figure>\n           <a> Reminders </a>\n        <li>  \n            <figure>\n               <img src=\"./assest/icon-planning.svg\">\n           </figure> \n           <a> Planning </a> \n            \n        </ul>\n        </div> ";
    };
    printDropDown(getContainerUl1);
  }
});
document.addEventListener("click", function (event) {
  console.log("sii");
  if (event.target.classList.contains("buttonDown2")) {
    console.log("aiuda2");
    var printDropDown2 = function printDropDown2(container) {
      container.innerHTML = "";
      container.innerHTML += "\n                <div>\n            <ul>\n            <li>  \n                <figure>\n                   <img class=\"buttonDown\" src=\"./assest/icon-todo.svg\">\n               </figure> \n               <a> Todo List  </a>\n            <li>  \n                <figure>\n                   <img src=\"./assest/icon-calendar.svg\">\n               </figure> \n               <a> Calendar </a>\n            <li>  \n                <figure>\n                   <img src=\"./assest/icon-reminders.svg\">\n               </figure>\n               <a> Reminders </a>\n            <li>  \n                <figure>\n                   <img src=\"./assest/icon-planning.svg\">\n               </figure> \n               <a> Planning </a> \n                \n            </ul>\n            </div> ";
    };
    printDropDown2(getContainerUl1);
  }
});