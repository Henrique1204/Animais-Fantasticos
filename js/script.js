// Importando modulos
import ScrollSuave from "./modules/scroll-suave.js";
import animarScroll from "./modules/animar-scroll.js";
import navegacaoTab from "./modules/navegacao-tab.js";
import AccordionList from "./modules/accordion-list.js";
import modal from "./modules/modal.js";
import tooltip from "./modules/tooltip.js";
import dropdownMenu from "./modules/dropdown-menu.js";
import menuMobile from "./modules/menu-mobile.js";
import horarioFuncionamento from "./modules/horario-funcionamento.js";
import animaisFetch from "./modules/animais-fetch.js";
import bitcoinFetch from "./modules/bitcoin-fetch.js";

const scrollSuave = new ScrollSuave("[data-menu='lista'] a[href^='#']");
scrollSuave.iniciar();

const accordionList = new AccordionList("[data-accordionList='faq'] dt", "ativo");
accordionList.iniciar();

animarScroll();
navegacaoTab();
modal();
tooltip();
dropdownMenu();
menuMobile();
horarioFuncionamento();
animaisFetch();
bitcoinFetch();
