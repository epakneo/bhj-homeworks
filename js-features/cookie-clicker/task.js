// let clicker = 0;
const clicker = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");

function changeSizes(){
  this.width = 150;
  this.height = 100;
  cookie.onclick = null;

  clicker.textContent = clicker.textContent + 1;
  
}

cookie.onclick = changeSizes;