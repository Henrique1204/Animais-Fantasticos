export default function bitcoinFetch(url, alvo) {
    fetch(url)
    .then((resposta) => resposta.json())
    .then((bitcoin) => {
        const btcPreco = document.querySelector(alvo);
        const precoDoacao = (1000 / bitcoin.BRL.sell).toFixed(4);
        btcPreco.innerText = String(precoDoacao).replace(".", ",");
    }).catch((erro) => {
        console.log(erro);
    });
}
