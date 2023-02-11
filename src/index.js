setTimeout(() => {
   const goHome = document.querySelector("#addproj");
   goHome.addEventListener("click", (e) => (document.getElementById("textinput").style.display = "block"));
   const goContact = document.querySelector("#addtodo");
   goContact.addEventListener("click", (e) => console.log("add todo"));
}, 1000);
