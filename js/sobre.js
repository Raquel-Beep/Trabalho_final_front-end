document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll(".btn-expande");
    const displayArea = document.getElementById("informacoes");
    const fonte = document.getElementById("dados-criadoras");
    console.log("fonte:", fonte);
    
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const id = this.getAttribute("id");
            if (displayArea.dataset.aberto === id) {
                displayArea.classList.add("escondido");
                displayArea.innerHTML = "";
                displayArea.dataset.aberto = "";
                return;
            }
            const conteudo = fonte.querySelector("#info-" + id);
            displayArea.innerHTML = conteudo.innerHTML;
            displayArea.classList.remove("escondido");
            displayArea.dataset.aberto = id

            const video = displayArea.querySelector("video");
            if (video) {
                video.load();
                video.play();
            }
        });
    });
});