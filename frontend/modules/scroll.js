export default function scrollSuave(){
    function scrollsuave(){
        const scroll=document.querySelectorAll('.a[href^="#"]')
    
        function scrolSuave(event){
            event.preventDefault()
            const href=event.currentTarget.getAttribute('href')
            const section=document.querySelector(href)
    
            section.scrollIntoView({
            behavior:'smooth',
            block:'start'
        })
    }
    
    
        scroll.forEach((item)=>{
            item.addEventListener('click',scrolSuave)
    })
    }
    scrollsuave()
}

const animaScroll=document.querySelectorAll('.anima-scroll')
const windowMetade=window.innerHeight * 0.6;


function anima(){
    animaScroll.forEach((sections)=>{
        const sectionTop=sections.getBoundingClientRect().top
        const isSection= (sectionTop-windowMetade) < 0


        if(isSection < 0){
            sections.classList.add('ativar')
        }
    })
}


window.addEventListener('scroll',anima)
