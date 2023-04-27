// escuchar el eveneto clic en los botones 
const getContainerUl1 =document.querySelector(".liFeatures_div");

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
           <a> Todo List  </a>
        <li>  
            <figure>
               <img src="./assest/icon-calendar.svg">
           </figure> 
           <a> Calendar </a>
        <li>  
            <figure>
               <img src="./assest/icon-reminders.svg">
           </figure>
           <a> Reminders </a>
        <li>  
            <figure>
               <img src="./assest/icon-planning.svg">
           </figure> 
           <a> Planning </a> 
            
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
               <a> Todo List  </a>
            <li>  
                <figure>
                   <img src="./assest/icon-calendar.svg">
               </figure> 
               <a> Calendar </a>
            <li>  
                <figure>
                   <img src="./assest/icon-reminders.svg">
               </figure>
               <a> Reminders </a>
            <li>  
                <figure>
                   <img src="./assest/icon-planning.svg">
               </figure> 
               <a> Planning </a> 
                
            </ul>
            </div> `
    }
    printDropDown2(getContainerUl1);
    }
    })

