export default class Tooltip {
    constructor(tooltip) {
        this.tooltips = document.querySelectorAll(tooltip);

        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
    }

    // Cria a tooltip
    criarTooltipsBox(elemento) {
        const tooltipBox = document.createElement("div");
        const texto = elemento.getAttribute("aria-label");

        tooltipBox.classList.add("tooltip");
        tooltipBox.innerText = texto;

        document.body.appendChild(tooltipBox);
        this.tooltipBox = tooltipBox;
    }

    // Faz a tooltip aparecer
    onMouseOver({ currentTarget }) {
        this.criarTooltipsBox(currentTarget);

        currentTarget.addEventListener("mouseleave", this.onMouseLeave);
        currentTarget.addEventListener("mousemove", this.onMouseMove);
    }

    // Move a tooltip
    onMouseMove(evento) {
        this.tooltipBox.style.top = `${evento.pageY + 20}px`;

        if (evento.pageX + 240 > window.innerWidth) {
            this.tooltipBox.style.left = `${evento.pageX - 190}px`;
        } else {
            this.tooltipBox.style.left = `${evento.pageX + 20}px`;
        }
    }

    // Remove a tooltip quando
    onMouseLeave({ currentTarget }) {
        this.tooltipBox.remove();
        // Remove o evento da lista de eventos dele.
        currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
        currentTarget.removeEventListener("mousemove", this.onMouseMove);
    }

    addEvento() {
        this.tooltips.forEach((item) => item.addEventListener("mouseover", this.onMouseOver));
    }

    iniciar() {
        if (this.tooltips.length) {
            this.addEvento();
        }

        return this;
    }
}
