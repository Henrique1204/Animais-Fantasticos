export default function iniciarHoraripFunciomente() {
    // Dados do html
    const funcionamento = document.querySelector("[data-semana]");
    const diasSemanas = funcionamento.dataset.semana.split(",").map(Number);
    const horarios = funcionamento.dataset.horario.split(",").map(Number);
    // Dados de controle
    const dataAgora = new Date();
    const diaAgora = dataAgora.getDay();
    const horaAgora = dataAgora.getHours();
    const diaAberto = diasSemanas.includes(diaAgora);
    const horarioAberto = (horaAgora >= horarios[0] && horaAgora < horarios[1]);

    if (diaAberto && horarioAberto) {
        funcionamento.classList.remove("fechado");
        funcionamento.classList.add("aberto");
        funcionamento.setAttribute("aria-label", "Aberto");
    } else {
        funcionamento.classList.remove("aberto");
        funcionamento.classList.add("fechado");
        funcionamento.setAttribute("aria-label", "Fechado");
    }
}

// const agora = new Date();
// Caso tu não complete os dados ele completa com valores padrões
// const futuro = new Date("Dec 24 2020 23:59");

// function transformarDia(tempo) {
//     return Math.round(tempo / (24 * 60 * 60 * 1000));
// }

// const diasAgora = transformarDia(agora);
// const diasFuturo = transformarDia(futuro);

// console.log(diasFuturo - diasAgora);
