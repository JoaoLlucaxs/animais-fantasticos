export default function initFuncionamento(){

}

const funcionamento=document.querySelector('[data-semana]')
const semana=funcionamento.dataset.semana.split(',').map(Number)
const horario=funcionamento.dataset.horario.split(',').map(Number)

const dataAgora=new Date()
const diaAgora=dataAgora.getDay()
const horarioAgora=dataAgora.getHours()

const semanaAberto=semana.indexOf(diaAgora) !== -1

const horarioAberto=(horarioAgora >=horario[0] && horarioAgora < horario[1])? 'aberto':'fechado'

if(semanaAberto && horarioAberto){
    funcionamento.classList.add('aberto')
}