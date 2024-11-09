const inputs = document.getElementById("inp");
const listContainer = document.getElementById("list_container");

function add(){
    if(inp.value ===''){
        alert("Please enter your task!");
    }else{
        let li =document.createElement("li");
        li.innerHTML = inp.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerText="\u00d7";
        li.appendChild(span);
    }
    inp.value = "";
    SaveData();
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        SaveData();
    }else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        SaveData();

    }
}, false);

function SaveData(){
    localStorage.setItem("data, listContainer.innerHTML");
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();