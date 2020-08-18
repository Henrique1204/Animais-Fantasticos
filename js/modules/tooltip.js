export default function iniciarTooltip() {
    const tooltips = document.querySelectorAll("[data-tooltip]");
    // Este objeto precisa ter o método "handleEvent" para ser usado no addEventListener
    const onMouseMove = {
        tooltipBox: "",
        elemento: "",
        handleEvent(evento) {
            this.tooltipBox.style.top = `${evento.pageY + 20}px`;
            this.tooltipBox.style.left = `${evento.pageX + 20}px`;
        },
    };

    const onMouseLeave = {
        tooltipBox: "",
        elemento: "",
        handleEvent() {
            this.tooltipBox.remove();
            // Remove o evento da lista de eventos dele.
            this.elemento.removeEventListener("mouseleave", onMouseLeave);
            this.elemento.removeEventListener("mousemove", onMouseMove);
        },
    };

    function criarTooltipsBox(elemento) {
        const tooltipBox = document.createElement("div");
        const texto = elemento.getAttribute("aria-label");

        tooltipBox.classList.add("tooltip");
        tooltipBox.innerText = texto;

        document.body.appendChild(tooltipBox);
        return tooltipBox;
    }

    function onMouseOver(evento) {
        const tooltipBox = criarTooltipsBox(this);
        tooltipBox.style.top = `${evento.pageY + 20}px`;
        tooltipBox.style.left = `${evento.pageX + 20}px`;

        onMouseLeave.tooltipBox = tooltipBox;
        onMouseLeave.elemento = this;
        this.addEventListener("mouseleave", onMouseLeave);

        onMouseMove.tooltipBox = tooltipBox;
        onMouseMove.elemento = this;
        this.addEventListener("mousemove", onMouseMove);
    }

    if (tooltips.length) {
        tooltips.forEach((item) => item.addEventListener("mouseover", onMouseOver));
    }
}
