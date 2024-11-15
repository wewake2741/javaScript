let inp=document.querySelector("input"); 
let btn=document.querySelector("button"); 
let ul=document.querySelector("ul"); 
 
btn.addEventListener("click",function(){ 
    let item=document.createElement("li"); 
    item.innerText=inp.value; 
 
    let delbtn=document.createElement("button"); 
    delbtn.innerText="delet"; 
    delbtn.classList.add("delet"); 
    item.appendChild(delbtn); 
 
    ul.appendChild(item); 
    inp.value=""; 
}); 
 
 
 
ul.addEventListener("click",function(event){ 
    if(event.target.nodeName=="BUTTON"){ 
        let par=event.target.parentElement; 
        par.remove(); 
    } 
})
