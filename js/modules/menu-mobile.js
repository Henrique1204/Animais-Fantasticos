import clicarfora from "./outside-click.js";

export default class MenuMobile {
    constructor(btnMenu, menu, classeAtivo, eventos) {
        this.btnMenu = document.querySelector(btnMenu);
        this.menu = document.querySelector(menu);
        this.eventos = (eventos === undefined) ? ["click", "touchstart"] : eventos;
        this.classeAtivo = classeAtivo;

        this.abrirMenu = this.abrirMenu.bind(this);
    }

    abrirMenu(evento) {
        evento.preventDefault();

        this.btnMenu.classList.add(this.classeAtivo);
        this.menu.classList.add(this.classeAtivo);

        clicarfora(this.menu, this.eventos, () => {
            this.btnMenu.classList.remove(this.classeAtivo);
            this.menu.classList.remove(this.classeAtivo);
        });
    }

    addEventosMenuMobiel() {
        this.eventos.forEach((item) => {
            this.btnMenu.addEventListener(item, this.abrirMenu);
        });
    }

    iniciar() {
        if (this.btnMenu && this.menu) {
            this.addEventosMenuMobiel();
        }

        return this;
    }
}
