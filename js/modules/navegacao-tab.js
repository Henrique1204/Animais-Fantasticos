// Exportando módulos
export default function iniciarNavegacaoTab() {
    const menuTab = document.querySelectorAll("[data-menuTab] li");
    const conteudoTab = document.querySelectorAll("[data-conteudoTab] article");
    const classeAtiva = "ativo";

    function ativarTab(lista, index) {
        const anime = [lista[index].dataset.anime];
        lista.forEach((item) => item.classList.remove(classeAtiva));
        lista[index].classList.add(classeAtiva, anime);
    }

    if (menuTab.length && conteudoTab.length) {
        ativarTab(conteudoTab, 0);
        menuTab.forEach((item, index) => item.addEventListener("click", () => ativarTab(conteudoTab, index)));
    }
}
