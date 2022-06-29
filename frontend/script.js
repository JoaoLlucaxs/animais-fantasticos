import imagemDescricao from "./modules/imagem_descri.js";
import perguntaResposta from './modules/pergunta_resposta.js';
import ScrolSuave from './modules/scroll.js';
import initMenuMobile from './modules/menu_mobile.js';
import initTooltip from './modules/tooltip.js';
import caixaModal from './modules/caixa_modal.js';
import InitDropdownMenu from './modules/dropMenu.js';
import initAnimaNumeros from './modules/animaNumeros.js'
import initFuncionamento from './modules/FuncionamentoDays.js'
import initBitcoin from './modules/bitcoin.js'

imagemDescricao()
perguntaResposta()
const suaveScroll=new ScrolSuave('a[href^="#"]')
suaveScroll.init()
initMenuMobile()
initTooltip()
caixaModal()
const downenu=new InitDropdownMenu('[data-dropdown]')
downenu.init()
initAnimaNumeros()
initFuncionamento()
initBitcoin()