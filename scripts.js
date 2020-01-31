// function expression to select elements
const selectElement = s => document.querySelector(s);

// open the menu on click
selectElement(".open").addEventListener("click", () => {
  // console.log("i am clicking to open the menu");
  selectElement(".nav-list").classList.add("active");
});

// close the menu on click
selectElement(".close").addEventListener("click", () => {
  // console.log("i am clicking to close the menu");
  selectElement(".nav-list").classList.remove("active");
});
