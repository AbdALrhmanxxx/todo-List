const inputBox = document.getElementById("input-box");
const listContiner = document.getElementById("list-continer");

function addTask(){
  if(inputBox.value  === ""){
    alert("you must write somthing !")
  }
  else{
    let li = document.createElement("li");
    li.innerHTML= inputBox.value;
    listContiner.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML= "\u00d7";
    li.appendChild(span);
  }
  inputBox.value=""
  saveData();
}
listContiner.addEventListener("click",function(e){
if(e.target.tagName === "LI"){
  e.target.classList.toggle("checked");
  saveData();
}
else if(e.target.tagName === "SPAN"){
  e.target.parentElement.remove();
  saveData();
}},false)

function saveData(){
  localStorage.setItem("data",listContiner.innerHTML)
}
function showTask(){
  listContiner.innerHTML=localStorage.getItem("data")
}
showTask();







// const todoList = [
//   {
//     task: "abd al rhman",
//   },
// ];
// function renderData() {
//   let htmlRender = "";
//   for (let i = 0; i < todoList.length; i++) {
//     let todoObject = todoList[i];
//     let { task } = todoObject;
//     let html = `<li">${task}</li>`;
//     htmlRender += html;
//   }
//   document.getElementById("list-continer").innerHTML = htmlRender;
// }
// renderData();
// document.querySelector(".Add").addEventListener("click", () => {
//   input = document.getElementById("input-box");
//   let task = input.value;
//   todoList.push({ task });
//   input.value = "";
//   console.log("hello");
//   renderData();
// });
