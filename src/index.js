const { addProj, addTodo, removeProj, removeTodo } = require("./load");
let projInput;
let todoInput;

setTimeout(() => {
   // The Adding of a new project //
   const projName = document.querySelector("#addproj");
   projName.addEventListener("click", (e) => {
      const x = document.getElementById("textinput");
      const y = document.getElementById("remproj");
      projInput = document.getElementById("inputinput");
      if (x.style.display === "none") {
         x.style.display = "block";
         y.style.display = "block";
         projName.innerHTML = "Add";
      } else {
         addProj();
         x.style.display = "none";
         y.style.display = "none";
         projInput.value = "";
         projName.innerHTML = "Edit Projects";
      }
   });
   const projNameClose = document.querySelector("#remproj");
   projNameClose.addEventListener("click", (e) => {
      const x = document.getElementById("textinput");
      const y = document.getElementById("remproj");
      projInput = document.getElementById("inputinput");
      if (x.style.display === "block") {
         removeProj();
         x.style.display = "none";
         projInput.value = "";
         y.style.display = "none";
         projName.innerHTML = "Edit Projects";
      }
   });

   // Adding A Todo Item //
   const tdName = document.querySelector("#addtodo");
   tdName.addEventListener("click", (e) => {
      const x = document.getElementById("tdtextinput");
      const y = document.getElementById("remtodo");
      todoInput = document.getElementById("tdinputinput");
      if (x.style.display === "none") {
         x.style.display = "block";
         y.style.display = "block";
         tdName.innerHTML = "Add";
      } else {
         addTodo();
         x.style.display = "none";
         y.style.display = "none";
         todoInput.value = "";
         tdName.innerHTML = "Edit To Dos";
      }
   });
   const tdNameClose = document.querySelector("#remtodo");
   tdNameClose.addEventListener("click", (e) => {
      const x = document.getElementById("tdtextinput");
      const y = document.getElementById("remtodo");
      todoInput = document.getElementById("tdinputinput");
      if (x.style.display === "block") {
         removeTodo();
         x.style.display = "none";
         todoInput.value = "";
         y.style.display = "none";
         tdName.innerHTML = "Edit ToDos";
      }
   });

   // Toggles Correct Todo Items When a Project is focused //
}, 1000);
