import outsideClick from "./outside-click.js";

export default class DropdownMenu {
    constructor(dropdownMenus, eventos, classeAtivo) {
        this.dropdownMenus = document.querySelectorAll(dropdownMenus);
        this.eventos = (eventos === undefined) ? eventos : ["touchstart", "click"];
        this.classeAtivo = classeAtivo;

        this.ativarDropdownMenu = this.ativarDropdownMenu.bind(this);
    }

    ativarDropdownMenu(evento) {
        evento.preventDefault();
        const elemento = evento.currentTarget;
        elemento.classList.add(this.classeAtivo);

        outsideClick(elemento, this.eventos, () => {
            elemento.classList.remove(this.classeAtivo);
        });
    }

    addEventosDropdownMenu() {
        this.dropdownMenus.forEach((menu) => {
            this.eventos.forEach((item) => {
                menu.addEventListener(item, this.ativarDropdownMenu);
            });
        });
    }

    iniciar() {
        if (this.dropdownMenus.length) {
            this.addEventosDropdownMenu();
        }

        return this;
    }
}
