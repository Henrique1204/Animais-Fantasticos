// Elemento é o botão onde deve interagir com o menu | Eventos é uma lista com os eventos que
// deverão ser adicionados ! Callback é a função que deverá ser executado pelos eventos do html
export default function outsideClick(elemento, eventos, callback) {
    const html = document.documentElement;
    const outside = "data-outside";

    // Isto é para poder utilizar o "evento"
    function handleOutsideClick(evento) {
        // Está chegando se o elemento é o link que abre o menu, ou é o menu interno
        //  faz isso usando o "contains()"
        if (!elemento.contains(evento.target)) {
            // remove o atributo "outside", isso para poder ser verificado outra vez
            elemento.removeAttribute(outside);

            eventos.forEach((item) => {
                html.removeEventListener(item, handleOutsideClick);
            });

            // Executa a função que foi passada como parâmetro
            callback();
        }
    }

    // Confere se não existe o atributo "outside"
    // Isso para reduzir o número de eventos adicionados no html
    if (!elemento.hasAttribute(outside)) {
        // Adiciona o atributo "outside"
        elemento.setAttribute(outside, "");
        // Percorre os eventos do site -- Click e TouchStart
        eventos.forEach((item) => {
            // Isso é pra transformar o código abaixo em assicrono, para jogar a adição do evento
            // por fim da lista de execução
            setTimeout(() => { html.addEventListener(item, handleOutsideClick); });
        });
    }
}
