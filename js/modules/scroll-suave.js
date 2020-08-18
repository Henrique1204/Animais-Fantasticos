// Exportando módulos
export default function iniciarScrollSuave() {
    const linksInterno = document.querySelectorAll(".menu a[href^='#'");

    function scrollSuave(evento) {
        evento.preventDefault();

        const href = this.getAttribute("href");
        const section = document.querySelector(href);

        section.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    if (linksInterno.length) {
        linksInterno.forEach((item) => item.addEventListener("click", scrollSuave));
    }
}
