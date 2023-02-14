const { addProj, addTodo } = require("./load");
let projInput;
let todoInput;

setTimeout(() => {
   // The Adding of a new project //
   const projName = document.querySelector("#addproj");
   projName.addEventListener("click", (e) => {
      const x = document.getElementById("textinput");
      projInput = document.getElementById("inputinput");
      if (x.style.display === "none") {
         x.style.display = "block";
      } else {
         addProj();
         x.style.display = "none";
         projInput.value = "";
      }
   });
   const projNameClose = document.querySelector("#remproj");
   projNameClose.addEventListener("click", (e) => {
      const x = document.getElementById("textinput");
      if (x.style.display === "block") {
         x.style.display = "none";
         projInput.value = "";
      } else {
         x.style.display = "none";
      }
   });

   // Adding A Todo Item //
   const tdName = document.querySelector("#addtodo");
   tdName.addEventListener("click", (e) => {
      const x = document.getElementById("tdtextinput");
      todoInput = document.getElementById("tdinputinput");
      if (x.style.display === "none") {
         x.style.display = "block";
      } else {
         addTodo();
         x.style.display = "none";
         todoInput.value = "";
      }
   });
   const tdNameClose = document.querySelector("#remtodo");
   tdNameClose.addEventListener("click", (e) => {
      const x = document.getElementById("tdtextinput");
      if (x.style.display === "block") {
         x.style.display = "none";
         todoInput.value = "";
      } else {
         x.style.display = "none";
      }
   });

   // Toggles Correct Todo Items When a Project is focused //
}, 1000);
