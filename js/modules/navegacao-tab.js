export default class NavegacaoTab {
    constructor(menuTab, conteudoTab, classeAtiva) {
        this.menuTab = document.querySelectorAll(menuTab);
        this.conteudoTab = document.querySelectorAll(conteudoTab);
        this.classeAtiva = classeAtiva;

        this.ativarTab = this.ativarTab.bind(this);
    }

    ativarTab(lista, index) {
        const anime = [lista[index].dataset.anime];
        lista.forEach((item) => item.classList.remove(this.classeAtiva));
        lista[index].classList.add(this.classeAtiva, anime);
    }

    addEvento() {
        if (this.menuTab.length && this.conteudoTab.length) {
            this.menuTab.forEach((item, index) => {
                item.addEventListener("click", () => this.ativarTab(this.conteudoTab, index));
            });
        }
    }

    iniciar() {
        if (this.menuTab.length && this.conteudoTab.length) {
            this.ativarTab(this.conteudoTab, 0);
            this.addEvento();
        }

        return this;
    }
}
