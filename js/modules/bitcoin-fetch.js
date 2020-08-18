export default function iniciarBitcoinFetch() {
    fetch('https://blockchain.info/ticker')
    .then((resposta) => resposta.json())
    .then((bitcoin) => {
        const btcPreco = document.querySelector(".btc-preco");
        const precoDoacao = (1000 / bitcoin.BRL.sell).toFixed(4);
        btcPreco.innerText = String(precoDoacao).replace(".", ",");
    }).catch((erro) => {
        console.log(erro);
    });
}
