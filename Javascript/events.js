let a=document.querySelector("button")
console.log(a);

let b=0;
a.onclick =()=> {
    console.log("button was clicked");
    ++b;
    console.log(b)
}
a.onmouseover =()=>{
    console.log("Mouse hovered");
    
}
let c=document.querySelector("div")
c.addEventListener("click",()=>{console.log("clicked");
})
c.addEventListener("dblclick", (event) => { })

ondblclick = (event) => {console.log("dbclik");
}