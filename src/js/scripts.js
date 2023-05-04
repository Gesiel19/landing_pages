// escuchar el eveneto clic en los botones 
const getContainerUl1 = document.querySelector(".ulFeatures_div");
const getContainerUl2 = document.querySelector(".ulCompany_div");
const dropdownButton1 =document.getElementById ("buttonDown1");
const dropdownButton2 =document.getElementById ("buttonDown2");
const containerUlFeature =document.getElementById ("ulFeatures_container");
const containerUlCompany =document.getElementById ("ulCompany_container");
const getLiCareers = document.querySelector(".li__careers");
const getLiAbout = document.querySelector(".li__about");
const getLiLogin = document.querySelector(".li___login");
dropdownButton1.addEventListener("click", function () {
    if (containerUlFeature.style.display === 'none') {
        containerUlFeature.style.display = 'block';
        getLiCareers.style.position = 'absolute';
        getLiCareers.style.left = '155px';
        getLiAbout.style.position = 'absolute';
        getLiAbout.style.left = '255px';
        getLiLogin.style.position = 'absolute';
        getLiLogin.style.left = '300px';
      } else {
        containerUlFeature.style.display = 'none';
      }
})
dropdownButton2.addEventListener("click", function () {
    if (containerUlCompany.style.display === 'none') {
        containerUlCompany.style.display = 'block';
      } else {
        containerUlCompany.style.display = 'none';
      }
})

const getBars = document.querySelector(".bars__menu");
let getLine1 = document.querySelector(".line1__bars-menu");
let getLine2 = document.querySelector(".line2__bars-menu");
let getLine3 = document.querySelector(".line3__bars-menu");
let getluContainer= document.querySelector(".divLeft__ul");
const getRegister =document.getElementById(".border_button")
getBars.addEventListener("click", () =>{
    getLine1.classList.toggle("activeline1__bars-menu");
    getLine2.classList.toggle("activeline2__bars-menu");
    getLine3.classList.toggle("activeline3__bars-menu");
    if (getluContainer.style.display === 'none') {
        getluContainer.style.display = 'block';
        getluContainer.style.opacity = '1';
        // getRegister.style.position ="relative";
        // getRegister.s
        tyle.left ="1000";
        // getluContainer.style.flex-direction = 'column';
      } else {
        getluContainer.style.display = 'none';
      }

})
// document.addEventListener("click", (event) => {
//     console.log("sii");
//     if (event.target.classList.contains("buttonDown1")) {
//         console.log("aiuda")
    //     const printDropDown = (container) => {
    //         container.innerHTML= ""
    //         container.innerHTML+= `
    //     <ul>
    //     <li>  
    //         <figure>
    //            <img class="buttonDown" src="./assest/icon-todo.svg">
    //        </figure> 
    //        <span> Todo List  </span>
    //     </li>  
    //     <li>
    //         <figure>
    //            <img src="./assest/icon-calendar.svg">
    //        </figure> 
    //        <span> Calendar </span>
    //     </li>
    //     <li>  
    //         <figure>
    //            <img src="./assest/icon-reminders.svg">
    //        </figure>
    //        <span> Reminders </span>
    //     </li>
    //     <li>  
    //         <figure>
    //            <img src="./assest/icon-planning.svg">
    //        </figure> 
    //        <span> Planning </span> 
    //     </li>
    //     </ul>`
    //     }
    //     printDropDown(getContainerUl1);
//     }
//     // printDropDown(getContainerUl1);
// })
// document.addEventListener("click", (event) => {
//     console.log("sii");
//     if (event.target.classList.contains("buttonDown2")) {
//         console.log("aiuda2")
        // const printDropDown2 = (container) => {
        //     container.innerHTML = ""
        //     container.innerHTML += `
        //      <ul>
        //         <li>  
        //             <figure>
        //                 <img class="buttonDown" src="./assest/icon-todo.svg">
        //             </figure> 
        //             <span> Todo List  </span>
        //         </li>
        //          <li>
        //             <figure>
        //                 <img src="./assest/icon-calendar.svg">
        //             </figure> 
        //             <span> Calendar </span>
        //          </li> 
        //          <li> 
        //             <figure>
        //                 <img src="./assest/icon-reminders.svg">
        //             </figure>
        //             <span> Reminders </span>
        //          </li>
        //         <li> 
        //             <figure>
        //            <img src="./assest/icon-planning.svg">
        //             </figure> 
        //             <span> Planning </span> 
        //         </li>
        //     </ul> `
        // }
        // printDropDown2(getContainerUl2);
//     }
//     // printDropDown2(getContainerUl2);
// })
// async function demo() {
//     function wait(t) {
//         return new Promise(resolve => {
//             setTimeout(() => {
//                 resolve();
//             }, t);
//         });
//     }
//     await wait(400);
//     document.querySelector("#hamburger-toggle").focus();
//     await wait(400);
//     document.querySelector(".content a").focus();
//     await wait(400);
//     document.querySelector("#hamburger-toggle").focus();
//     await wait(400);
//     document.querySelector("#hamburger-toggle").checked = true;
//     await wait(400);
//     document.querySelector(".nav-list .nav-list-item:nth-child(1) a").focus();
//     await wait(200);
//     document.querySelector(".nav-list .nav-list-item:nth-child(2) a").focus();
//     await wait(200);
//     document.querySelector(".nav-list .nav-list-item:nth-child(3) a").focus();
//     await wait(200);
//     document.querySelector(".nav-list .nav-list-item:nth-child(2) a").focus();
//     await wait(200);
//     document.querySelector(".nav-list .nav-list-item:nth-child(1) a").focus();
//     await wait(200);
//     document.querySelector("#hamburger-toggle").checked = false;
// }
// demo();