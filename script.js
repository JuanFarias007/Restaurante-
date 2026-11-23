const botaoTema = document.getElementById("mudar-cor");

botaoTema.addEventListener("click", function() {
    document.body.classList.toggle("tema-escuro");
});