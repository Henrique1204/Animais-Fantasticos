// Exportando modulos
export default function iniciarAnimacaoScroll() {
    const sections = document.querySelectorAll("[data-animarScroll]");
    const classeAtiva = "ativo";

    function animaScroll() {
        sections.forEach((section) => {
            const topo = section.getBoundingClientRect().top - (window.innerHeight * 0.6);

            if (topo <= 0 && !section.classList.contains(classeAtiva)) {
                section.classList.add(classeAtiva);
            }
        });
    }

    animaScroll();
    window.addEventListener("scroll", animaScroll);
}
