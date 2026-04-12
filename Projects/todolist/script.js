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
    save();
    a.value=""
}
a.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addtask();
    }
});
function save() {
    localStorage.setItem("data",b.innerHTML)
}
function show() {
    b.innerHTML=localStorage.getItem("data")
}
show()