document.getElementById("destroy-btn").addEventListener("click", function () {
  alert("💥 The world has been destroyed!");
  document.body.style.backgroundColor = "#ff0000";
  document.body.innerHTML = "<h1>💀 Everything is gone.</h1>";
});
