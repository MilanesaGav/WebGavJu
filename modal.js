document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("myModal");
    const btn = document.getElementById("mybtn");
    const span = document.querySelector(".close");
  
    btn.addEventListener("click", function (e) {
      e.preventDefault(); // Evita que el <a> recargue la página
      modal.style.display = "block";
    });
  
    span.addEventListener("click", function () {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  