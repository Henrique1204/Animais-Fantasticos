export default class ScrollAnima {
    constructor(sections, classeAtiva) {
        this.sections = document.querySelectorAll(sections);
        this.classeAtiva = classeAtiva;
        this.metadeJanela = window.innerHeight * 0.6;

        this.animaScroll = this.animaScroll.bind(this);
    }

    animaScroll() {
        this.sections.forEach((section) => {
            const topo = section.getBoundingClientRect().top - (this.metadeJanela);

            if (topo <= 0 && !section.classList.contains(this.classeAtiva)) {
                section.classList.add(this.classeAtiva);
            }
        });
    }

    iniciar() {
        this.animaScroll();
        window.addEventListener("scroll", this.animaScroll);
    }
}
