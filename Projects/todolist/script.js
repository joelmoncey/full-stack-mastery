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
b.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        const li = event.target;
        const rect = li.getBoundingClientRect();
        const clickX = event.clientX - rect.left;
        if (clickX > li.offsetWidth - 30) {
            li.remove();
            save();
        } else {
            li.classList.toggle("checked");
            save();
        }
    }
});

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