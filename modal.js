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
  
  document.addEventListener("DOMContentLoaded", function () {
    const modalcerrar= document.getElementById("modal2");
    const btncerrar = document.getElementById("lateral-abajo");
    const cerrar = document.getElementById("cerrar");
  
    btncerrar.addEventListener("click", function (e) {
      e.preventDefault(); // Evita que el <a> recargue la página
      modalcerrar.style.display = "block";
    });
  
    cerrar.addEventListener("click", function () {
      modalcerrar.style.display = "none";
    });
  
    window.addEventListener("click", function (event) {
      if (event.target===modalcerrar){
        modalcerrar.style.display = "none";
      }
    });
  });
  