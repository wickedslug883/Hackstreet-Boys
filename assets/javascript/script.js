var searchBtn = document.querySelector('#searchbutton');
var transBtn = document.querySelector('#transbutton');

searchBtn.addEventListener("click", wordSearch);
transBtn.addEventListener("click", tSearch);

function wordSearch() {
  var searchValue = document.getElementById("mainword").value;
  console.log(searchValue);
};

function tSearch() {
    var transValue = document.getElementById("transword").value;
    var langChoice = document.getElementById("langselect").value;
    console.log(transValue);
    console.log(langChoice);
};