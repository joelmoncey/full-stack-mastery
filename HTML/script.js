const value =document.querySelector(".value")
const btns =document.querySelector(".btn")
console.log(value);
console.log(btns);
let count=0;
btns.addEventListener("click",()=>{
    count++;
    value.textContent=count;
})
