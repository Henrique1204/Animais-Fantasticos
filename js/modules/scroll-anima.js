import debounce from "./debounce.js";

export default class ScrollAnima {
    constructor(sections, classeAtiva) {
        this.sections = document.querySelectorAll(sections);
        this.classeAtiva = classeAtiva;
        this.metadeJanela = window.innerHeight * 0.6;

        this.checarDistancia = debounce(this.checarDistancia.bind(this), 50);
    }

    getDistancia() {
        this.distancias = [...this.sections].map((section) => {
            const topo = section.offsetTop;

            return { elemento: section, topo: Math.floor(topo - this.metadeJanela) };
        });
    }

    checarDistancia() {
        this.distancias.forEach((item) => {
            if (window.pageYOffset > item.topo) {
                item.elemento.classList.add(this.classeAtiva);
            }
        });
    }

    iniciar() {
        if (this.sections.length) {
            this.getDistancia();
            this.checarDistancia();
            window.addEventListener("scroll", this.checarDistancia);
        }

        return this;
    }

    stop() {
        window.removeEventListener("scroll", this.checarDistancia);
    }
}
