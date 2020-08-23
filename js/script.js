// Importando modulos
import ScrollSuave from "./modules/scroll-suave.js";
import ScrollAnima from "./modules/scroll-anima.js";
import NavegacaoTab from "./modules/navegacao-tab.js";
import AccordionList from "./modules/accordion-list.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import dropdownMenu from "./modules/dropdown-menu.js";
import menuMobile from "./modules/menu-mobile.js";
import horarioFuncionamento from "./modules/horario-funcionamento.js";
import fetchAnimais from "./modules/animais-fetch.js";
import bitcoinFetch from "./modules/bitcoin-fetch.js";

const scrollSuave = new ScrollSuave("[data-menu='lista'] a[href^='#']");
scrollSuave.iniciar();

const accordionList = new AccordionList("[data-accordionList='faq'] dt", "ativo");
accordionList.iniciar();

const navegacaoTab = new NavegacaoTab("[data-menuTab] li", "[data-conteudoTab] article", "ativo");
navegacaoTab.iniciar();

const modal = new Modal("[data-modal='container']", "[data-modal='abrir']", "[data-modal='fechar']", "ativo");
modal.iniciar();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.iniciar();

const scrollAnima = new ScrollAnima("[data-animarScroll]", "ativo");
scrollAnima.iniciar();

dropdownMenu();
menuMobile();
horarioFuncionamento();

fetchAnimais('../../animaisApi.json', "#numeros .numeros-grid");
bitcoinFetch('https://blockchain.info/ticker', ".btc-preco");
