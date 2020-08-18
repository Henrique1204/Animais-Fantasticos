// Exportando módulos
export default class Modal {
    constructor(modalContainer, modalAbrir, modalFechar, classeAtivo) {
        this.modalContainer = document.querySelector(modalContainer);
        this.modalAbrir = document.querySelector(modalAbrir);
        this.modalFechar = document.querySelector(modalFechar);
        this.classeAtivo = (classeAtivo === undefined) ? "ativo" : classeAtivo;

        this.modal = this.modal.bind(this);
    }

    modal(evento) {
        evento.preventDefault();

        if (evento.target === evento.currentTarget) {
            this.modalContainer.classList.toggle(this.classeAtivo);
        }
    }

    addEvento() {
        this.modalAbrir.addEventListener("click", this.modal);
        this.modalFechar.addEventListener("click", this.modal);
        this.modalContainer.addEventListener("click", this.modal);
    }

    iniciar() {
        if (this.modalAbrir && this.modalContainer && this.modalFechar) {
            this.addEvento();
        }

        return this;
    }
}
