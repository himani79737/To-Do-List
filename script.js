const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.textContent = inputBox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "❌";
        li.appendChild(span);
        }
        inputBox.value = "";
        storeItem();
}
listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
    storeItem();
    }

    else if(e.target.tagName === "SPAN")
       {
         e.target.parentElement.remove();
        storeItem();
        }

},false);



function storeItem(){
    localStorage.setItem("data", listcontainer.innerHTML);

}
function displayItem(){
    listcontainer.innerHTML = localStorage.getItem("data");
   
}
displayItem();