import outsideClick from "./outside-click.js";

export default function iniciarDropdownMenu() {
    const dropdownMenus = document.querySelectorAll("[data-dropdown]");
    // Evento de click para PC e touchstart para Mobile
    const eventos = ["touchstart", "click"];
    const classeAtivo = "ativo";

    // Função que faz o menu aparecer e sumir
    function handleClick(evento) {
        evento.preventDefault();
        this.classList.add(classeAtivo);

        // Chamada da função que faz o menu sumir
        outsideClick(this, eventos, () => {
            this.classList.remove(classeAtivo);
        });
    }

    if (dropdownMenus.length) {
        dropdownMenus.forEach((menu) => {
            eventos.forEach((item) => {
                menu.addEventListener(item, handleClick);
            });
        });
    }
}
