// escuchar el eveneto clic en los botones 
const getContainerUl1 =document.querySelector(".ulFeatures_div");
const getContainerUl2 =document.querySelector(".ulCompany_div");


document.addEventListener("click", (event)=>{
console.log("sii");
if(event.target.classList.contains("buttonDown1")){
    console.log("aiuda")
    const printDropDown= (container) => {
        container.innerHTML = ""
        container.innerHTML += `
            <div>
        <ul>
        <li>  
            <figure>
               <img class="buttonDown" src="./assest/icon-todo.svg">
           </figure> 
           <span> Todo List  </span>
        </li>  
        <li>
            <figure>
               <img src="./assest/icon-calendar.svg">
           </figure> 
           <span> Calendar </span>
        </li>
        <li>  
            <figure>
               <img src="./assest/icon-reminders.svg">
           </figure>
           <span> Reminders </span>
        </li>
        <li>  
            <figure>
               <img src="./assest/icon-planning.svg">
           </figure> 
           <span> Planning </span> 
        </li>
        </ul>
        </div> `
}
printDropDown(getContainerUl1);
}
})
document.addEventListener("click", (event)=>{
    console.log("sii");
    if(event.target.classList.contains("buttonDown2")){
        console.log("aiuda2")
        const printDropDown2= (container) => {
            container.innerHTML = ""
            container.innerHTML += `
                <div>
            <ul>
            <li>  
                <figure>
                   <img class="buttonDown" src="./assest/icon-todo.svg">
               </figure> 
               <span> Todo List  </span>
            </li>
            <li>
                <figure>
                   <img src="./assest/icon-calendar.svg">
               </figure> 
               <span> Calendar </span>
            </li> 
            <li> 
                <figure>
                   <img src="./assest/icon-reminders.svg">
               </figure>
               <span> Reminders </span>
            </li>
            <li> 
                <figure>
                   <img src="./assest/icon-planning.svg">
               </figure> 
               <span> Planning </span> 
            </li>
            </ul>
            </div> `
    }
    printDropDown2(getContainerUl1);
    }
    })