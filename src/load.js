let makeTodoList;
let todoItems;
let tdName;

// creates a project //
export function addProj() {
   const todoTitle = document.querySelector("#tdtitle");
   const projName = document.getElementById("inputinput").value;
   todoItems = document.getElementById("todoitems");

   const projects = document.getElementById("project");

   const ppDiv = document.createElement("div");
   ppDiv.id = "pp";
   ppDiv.classList.add("pp");

   const ppLabel = document.createElement("label");
   ppLabel.classList.add("radio");

   const ppButton = document.createElement("input");
   ppButton.type = "radio";
   ppButton.name = "radio";

   const ppSpan = document.createElement("span");
   ppSpan.classList.add("checkmark");

   ppLabel.appendChild(ppButton);
   ppLabel.appendChild(ppSpan);
   ppDiv.appendChild(ppLabel);
   projects.appendChild(ppDiv);
   ppDiv.insertAdjacentHTML("beforeend", projName);
   ppDiv.addEventListener("click", (e) => {
      todoTitle.innerHTML = ppDiv.innerText;
      const list = document.getElementsByClassName("item");
      for (const item of list) {
         if (item.classList.value === todoTitle.innerHTML + " item") {
            item.style.display = "grid";
         } else {
            item.style.display = "none";
         }
      }
   });

   // Creates an Empty todo list //
   makeTodoList = document.createElement("div");
   makeTodoList.id = "todolist";
   makeTodoList.classList.add(ppDiv.innerText);
   makeTodoList.classList.add("item");
   makeTodoList.style.display = "none";
   todoItems.appendChild(makeTodoList);
}

export function addTodo() {
   const todoTitle = document.querySelector("#tdtitle");
   tdName = document.getElementById("tdinputinput").value;
   const todolist = document.createElement("div");
   todolist.id = "todo";

   const tdDiv = document.createElement("div");
   tdDiv.id = "td";
   tdDiv.classList.add("td");

   const tdButton = document.createElement("input");
   tdButton.type = "checkbox";
   tdButton.name = "check";
   tdButton.classList.add("checkbox");

   const tdText = document.createElement("h5");
   tdText.innerHTML = tdName;

   const tdDate = document.createElement("input");
   tdDate.type = "datetime-local";
   tdDate.name = "date";
   tdDate.id = "date";

   const IDDiv = document.createElement("div");
   IDDiv.innerHTML = tdDiv.appendChild(tdButton);
   tdDiv.appendChild(tdText);
   tdDiv.appendChild(tdDate);
   todolist.appendChild(tdDiv);
   // makeTodoList.appendChild(todolist);

   const list = document.getElementsByClassName("item");
   for (const item of list) {
      if (String(item.classList.value) === String(todoTitle.innerText + " item")) {
         console.log("they equal");
         item.appendChild(todolist);
      } else {
         console.log("it no equal");
      }
   }
}

// remove a project and all of its todos //
export function removeProj() {
   const projName = document.getElementById("inputinput").value;
   const proj = document.getElementsByClassName("pp");
   for (const item of proj) {
      if (item.innerText === projName) {
         item.remove();
         const list = document.getElementsByClassName("item");
         for (const tos of list) {
            if (String(tos.classList.value) === String(projName + " item")) {
               tos.remove();
            } else {
               console.log("it no equal");
            }
         }
      } else {
         console.log("no match");
      }
   }
}

export function removeTodo() {
   const tdH5 = document.getElementById("tdinputinput").value;
   const tdItem = document.getElementsByClassName("td");
   for (const item of tdItem) {
      if (item.innerText === tdH5) {
         item.remove();
      } else {
         console.log("trying next");
      }
   }
}
