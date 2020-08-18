import clicarfora from "./outside-click.js";

export default function iniciarMenuMobile() {
    const btnMenu = document.querySelector("[data-menu='btn'");
    const menu = document.querySelector("#menu");
    const eventos = ["click", "touchstart"];
    const classeAtivo = "ativo";

    function abrirMenu(evento) {
        evento.preventDefault();

        btnMenu.classList.add(classeAtivo);
        menu.classList.add(classeAtivo);

        clicarfora(menu, eventos, () => {
            btnMenu.classList.remove(classeAtivo);
            menu.classList.remove(classeAtivo);
        });
    }

    if (btnMenu && menu) {
        eventos.forEach((item) => {
            btnMenu.addEventListener(item, abrirMenu);
        });
    }
}
