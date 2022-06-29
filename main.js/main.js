/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/modules/FuncionamentoDays.js":
/*!***********************************************!*\
  !*** ./frontend/modules/FuncionamentoDays.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFuncionamento)\n/* harmony export */ });\nfunction initFuncionamento(){\r\n\r\n}\r\n\r\nconst funcionamento=document.querySelector('[data-semana]')\r\nconst semana=funcionamento.dataset.semana.split(',').map(Number)\r\nconst horario=funcionamento.dataset.horario.split(',').map(Number)\r\n\r\nconst dataAgora=new Date()\r\nconst diaAgora=dataAgora.getDay()\r\nconst horarioAgora=dataAgora.getHours()\r\n\r\nconst semanaAberto=semana.indexOf(diaAgora) !== -1\r\n\r\nconst horarioAberto=(horarioAgora >=horario[0] && horarioAgora < horario[1])? 'aberto':'fechado'\r\n\r\nif(semanaAberto && horarioAberto){\r\n    funcionamento.classList.add('aberto')\r\n}\n\n//# sourceURL=webpack://animais-fantasticos/./frontend/modules/FuncionamentoDays.js?");

/***/ }),

/***/ "./frontend/modules/animaNumeros.js":
/*!******************************************!*\
  !*** ./frontend/modules/animaNumeros.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaNumeros)\n/* harmony export */ });\nfunction initAnimaNumeros(){\r\n    function animaNumeros() {\r\n        const numeros = document.querySelectorAll('[data-numero=\"\"]');\r\n      \r\n      numeros.forEach((numero) => {\r\n          const total = +numero.innerText;\r\n          const inscremento = Math.floor(total / 100);\r\n          let start = 0;\r\n          const timer = setInterval(() => {\r\n            start+= inscremento;\r\n            numero.innerText = start;\r\n            if(start > total) {\r\n              numero.innerText = total;\r\n              clearInterval(timer);\r\n            }\r\n          }, 25 * Math.random());\r\n        });\r\n      }\r\n      \r\n      let observer;\r\n\r\n      function handleMutation(mutation) {\r\n       if(mutation[0].target.classList.contains('ativo')) {\r\n        observer.disconnect();\r\n        animaNumeros();\r\n       }\r\n      }\r\n      const observerTarget = document.querySelector('.numeros');\r\n      observer= new MutationObserver(handleMutation);\r\n\r\n      \r\n      \r\n      observer.observe(observerTarget, {attributes: true});\r\n    }\n\n//# sourceURL=webpack://animais-fantasticos/./frontend/modules/animaNumeros.js?");

/***/ }),

/***/ "./frontend/modules/bitcoin.js":
/*!*************************************!*\
  !*** ./frontend/modules/bitcoin.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initBitcoin)\n/* harmony export */ });\nfunction initBitcoin(){\nfetch(\"https://blockchain.info/ticker\")\n    .then(response=> response.json())\n    .then((json) => {\n        const inserir=document.querySelector('.btc-preco')\n        inserir.innerHTML=(1000/json.BRL.sell).toFixed(4)\n}).catch(erro => console.log(Error(erro)));\n}\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://animais-fantasticos/./frontend/modules/bitcoin.js?");

/***/ }),

/***/ "./frontend/modules/caixa_modal.js":
/*!*****************************************!*\
  !*** ./frontend/modules/caixa_modal.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ caixaModal)\n/* harmony export */ });\nfunction caixaModal(){\r\n    function caixaLogin(){\r\n        const abrirModal=document.querySelector('a[data-modal=\"abrir\"]')\r\n        const caixaSpan=document.querySelector('.modal-container')\r\n        const fecharModal=document.querySelector('.fechar')\r\n        \r\n        function abrir(event){\r\n            event.preventDefault()\r\n            caixaSpan.classList.add('ativo')\r\n        }\r\n        \r\n        \r\n        function fechar(event){\r\n            event.preventDefault()\r\n            caixaSpan.classList.remove('ativo')\r\n        }\r\n        \r\n        function cliqueForaModal(event){\r\n            if (event.target === this){\r\n                fechar(event)\r\n            }\r\n        }\r\n        \r\n        if(abrirModal && caixaSpan && fecharModal){\r\n        \r\n        \r\n        abrirModal.addEventListener('click', abrir)\r\n        fecharModal.addEventListener('click',fechar)\r\n        caixaSpan.addEventListener('click',cliqueForaModal)\r\n        }}\r\n        caixaLogin()\r\n        \r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./frontend/modules/caixa_modal.js?");

/***/ }),

/***/ "./frontend/modules/dropMenu.js":
/*!**************************************!*\
  !*** ./frontend/modules/dropMenu.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropdownMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClick.js */ \"./frontend/modules/outsideClick.js\");\n\r\n\r\n\r\nfunction initDropdownMenu() {\r\n  const dropdownMenus = document.querySelectorAll('[data-dropdown]');\r\n\r\n  function handleClick(event) {\r\n    event.preventDefault();\r\n    this.classList.add('active');\r\n    (0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ['touchstart', 'click'], () => {\r\n      this.classList.remove('active');\r\n    });\r\n  };\r\n\r\n    \r\n  dropdownMenus.forEach(menu => {\r\n    ['touchstart', 'click'].forEach(userEvent => {\r\n      menu.addEventListener(userEvent, handleClick);\r\n    });\r\n  });\r\n}\r\n\r\nconsole.log('Ola')\r\n\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./frontend/modules/dropMenu.js?");

/***/ }),

/***/ "./frontend/modules/imagem_descri.js":
/*!*******************************************!*\
  !*** ./frontend/modules/imagem_descri.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ imagemDescricao)\n/* harmony export */ });\nfunction imagemDescricao(){\r\n    function descricao(){\r\n        const imagem=document.querySelectorAll('.js-lista li')\r\n        const descricao=document.querySelectorAll('.js-descricao section')\r\n        descricao[0].classList.add('active')\r\n        \r\n        const img=Array.from(imagem)\r\n        \r\n        \r\n        function handleClick(index){\r\n            descricao.forEach((item)=>{\r\n                item.classList.remove('active')\r\n            })\r\n            descricao[index].classList.add('active')\r\n        }\r\n        \r\n        \r\n        img.forEach((item,index)=>{\r\n            item.addEventListener('click',()=>{\r\n                handleClick(index)\r\n            })\r\n        })\r\n        }\r\n        descricao()\r\n}\n\n//# sourceURL=webpack://animais-fantasticos/./frontend/modules/imagem_descri.js?");

/***/ }),

/***/ "./frontend/modules/menu_mobile.js":
/*!*****************************************!*\
  !*** ./frontend/modules/menu_mobile.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClick.js */ \"./frontend/modules/outsideClick.js\");\n\r\n\r\nfunction initMenuMobile() {\r\n  const menuButton = document.querySelector('[data-menu=\"button\"]');\r\n  const menuList = document.querySelector('[data-menu=\"list\"]');\r\n  const eventos = ['click', 'touchstart'];\r\n  \r\n  function openMenu() {\r\n    menuList.classList.add('active');\r\n    menuButton.classList.add('active');\r\n    (0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList, eventos, () => {\r\n  \r\n      menuList.classList.remove('active');\r\n      menuButton.classList.remove('active');\r\n    })\r\n  }\r\n\r\n  if(menuButton) {\r\n    eventos.forEach(evento => menuButton.addEventListener(evento, openMenu));\r\n  }\r\n  \r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./frontend/modules/menu_mobile.js?");

/***/ }),

/***/ "./frontend/modules/outsideClick.js":
/*!******************************************!*\
  !*** ./frontend/modules/outsideClick.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\n\r\nfunction outsideClick(element, events, callback) {\r\n    const html = document.documentElement;\r\n    const outside = 'data-outside';\r\n    function handleOutsideClick(event) {\r\n      if(!element.contains(event.target)) {\r\n        element.removeAttribute(outside);\r\n        events.forEach(userEvent => {\r\n          html.removeEventListener(userEvent, handleOutsideClick);\r\n        })\r\n        callback();\r\n      }\r\n    }\r\n    events.forEach(userEvent => {\r\n        \r\n      setTimeout(()=>{html.addEventListener(userEvent, handleOutsideClick);})\r\n    })\r\n    if(!element.hasAttribute(outside)) {\r\n      events.forEach(userEvent => {\r\n        \r\n        setTimeout(()=>{html.addEventListener(userEvent, handleOutsideClick);})\r\n      })\r\n      element.setAttribute(outside, '');\r\n    }\r\n    \r\n  }\n\n//# sourceURL=webpack://animais-fantasticos/./frontend/modules/outsideClick.js?");

/***/ }),

/***/ "./frontend/modules/pergunta_resposta.js":
/*!***********************************************!*\
  !*** ./frontend/modules/pergunta_resposta.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ perguntaResposta)\n/* harmony export */ });\nfunction perguntaResposta(){\r\n    function handleResposta(){\r\n        const faq=document.querySelectorAll('.faq-lista dt')\r\n        const faqResposta=document.querySelectorAll('.faq-lista dd')\r\n        faqResposta[0].classList.add('resposta')\r\n        \r\n            function handleReesposta(index){\r\n                faqResposta[index].classList.toggle('resposta')\r\n            }\r\n            faq.forEach((valor,index)=>{\r\n            valor.addEventListener('click',()=>{\r\n                handleReesposta(index)\r\n            })\r\n            })\r\n        }\r\n        handleResposta()\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./frontend/modules/pergunta_resposta.js?");

/***/ }),

/***/ "./frontend/modules/scroll.js":
/*!************************************!*\
  !*** ./frontend/modules/scroll.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ scrollSuave)\n/* harmony export */ });\n\nclass scrollSuave{\n   constructor(links,options){\n     this.linksInternos=document.querySelectorAll(links)\n\n     if(options === undefined){\n        this.options={\n            behavior:'smooth',\n            block:'start'\n        }\n     }else{\n        this.options=options\n     }\n     this.scrolSuave=this.scrolSuave.bind(this)\n   }\n    \n    scrolSuave(event){\n            event.preventDefault()\n            const href=event.currentTarget.getAttribute('href')\n            const section=document.querySelector(href)\n    \n            section.scrollIntoView(this.options)\n    }\n\n    addlinkEvent(){\n        this.linksInternos.forEach((item)=>{\n            item.addEventListener('click',this.scrolSuave)\n        })\n}\n\n    init(){\n        if(this.linksInternos.length){\n            this.addlinkEvent()\n        }\n    }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./frontend/modules/scroll.js?");

/***/ }),

/***/ "./frontend/modules/tooltip.js":
/*!*************************************!*\
  !*** ./frontend/modules/tooltip.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTooltip)\n/* harmony export */ });\nfunction initTooltip() {\r\n    const tooltips = document.querySelectorAll('[data-tooltip]');\r\n  \r\n    const onMouseMove = {\r\n      handleEvent(event) {\r\n        this.tooltipBox.style.top = `${event.pageY + 20} px`;\r\n        this.tooltipBox.style.left = `${event.pageX + 20} px`;\r\n      },\r\n    };\r\n   \r\n    const onMouseLeave = {\r\n      handleEvent() {\r\n        this.tooltipBox.remove();\r\n        this.element.removeEventListener('mouseleave', onMouseLeave);\r\n        this.element.removeEventListener('mousemove', onMouseMove);\r\n      },\r\n    };\r\n\r\n    function criarTooltipBox(element) {\r\n      const tooltipBox = document.createElement('div');\r\n      const text = element.getAttribute('aria-label');\r\n      tooltipBox.classList.add('tooltip');\r\n      tooltipBox.innerText = text;\r\n      document.body.appendChild(tooltipBox);\r\n      return tooltipBox;\r\n    }\r\n    \r\n    function onMouseOver() {\r\n      const tooltipBox = criarTooltipBox(this);\r\n      \r\n      onMouseMove.tooltipBox = tooltipBox;\r\n      this.addEventListener('mousemove', onMouseMove);\r\n    \r\n      onMouseLeave.tooltipBox = tooltipBox;\r\n      onMouseLeave.element = this;\r\n      this.addEventListener('mouseleave', onMouseLeave);\r\n    }\r\n    \r\n  tooltips.forEach((item) => {\r\n    item.addEventListener('mouseover', onMouseOver);\r\n  })\r\n  \r\n}\n\n//# sourceURL=webpack://animais-fantasticos/./frontend/modules/tooltip.js?");

/***/ }),

/***/ "./frontend/script.js":
/*!****************************!*\
  !*** ./frontend/script.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_imagem_descri_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/imagem_descri.js */ \"./frontend/modules/imagem_descri.js\");\n/* harmony import */ var _modules_pergunta_resposta_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/pergunta_resposta.js */ \"./frontend/modules/pergunta_resposta.js\");\n/* harmony import */ var _modules_scroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scroll.js */ \"./frontend/modules/scroll.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/menu_mobile.js */ \"./frontend/modules/menu_mobile.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./frontend/modules/tooltip.js\");\n/* harmony import */ var _modules_caixa_modal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/caixa_modal.js */ \"./frontend/modules/caixa_modal.js\");\n/* harmony import */ var _modules_dropMenu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropMenu.js */ \"./frontend/modules/dropMenu.js\");\n/* harmony import */ var _modules_animaNumeros_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/animaNumeros.js */ \"./frontend/modules/animaNumeros.js\");\n/* harmony import */ var _modules_FuncionamentoDays_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/FuncionamentoDays.js */ \"./frontend/modules/FuncionamentoDays.js\");\n/* harmony import */ var _modules_bitcoin_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/bitcoin.js */ \"./frontend/modules/bitcoin.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_imagem_descri_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_pergunta_resposta_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\nconst suaveScroll=new _modules_scroll_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('a[href^=\"#\"]')\r\nsuaveScroll.init()\r\n;(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n;(0,_modules_caixa_modal_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\r\n;(0,_modules_dropMenu_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\r\n;(0,_modules_animaNumeros_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])()\r\n;(0,_modules_FuncionamentoDays_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])()\r\n;(0,_modules_bitcoin_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])()\n\n//# sourceURL=webpack://animais-fantasticos/./frontend/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./frontend/script.js");
/******/ 	
/******/ })()
;