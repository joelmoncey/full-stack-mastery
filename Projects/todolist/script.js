let a=document.getElementById("inputbox")
let b=document.getElementById("list")
function addtask() {
    if (a.value==="") {
        alert("need to enter task")
    } else {
        let li=document.createElement("li")
        li.innerHTML=a.value
        b.appendChild(li)
    }
}
