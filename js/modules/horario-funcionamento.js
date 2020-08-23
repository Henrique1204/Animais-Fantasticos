export default class HorarioFuncionamento {
    constructor(funcionamento) {
        this.funcionamento = document.querySelector(funcionamento);
    }

    dadosFuncionamento() {
        this.diasSemanas = this.funcionamento.dataset.semana.split(",").map(Number);
        this.horarios = this.funcionamento.dataset.horario.split(",").map(Number);
    }

    dadosAgora() {
        this.dataAgora = new Date();
        this.diaAgora = this.dataAgora.getDay();
        this.horaAgora = this.dataAgora.getUTCHours() - 3;
    }

    estaAberto() {
        const diaAberto = this.diasSemanas.includes(this.diaAgora);
        const horarioAberto = (this.horaAgora >= this.horarios[0] && this.horaAgora < this.horarios[1]);

        return diaAberto && horarioAberto;
    }

    ativarAberto() {
        if (this.estaAberto()) {
            this.funcionamento.classList.remove("fechado");
            this.funcionamento.classList.add("aberto");
            this.funcionamento.setAttribute("aria-label", "Aberto");
        } else {
            this.funcionamento.classList.remove("aberto");
            this.funcionamento.classList.add("fechado");
            this.funcionamento.setAttribute("aria-label", "Fechado");
        }
    }

    iniciar() {
        if (this.funcionamento) {
            this.dadosAgora();
            this.dadosFuncionamento();
            this.ativarAberto();
        }

        return this;
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
