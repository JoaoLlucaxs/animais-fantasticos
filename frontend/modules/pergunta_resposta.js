export default function perguntaResposta(){
    function handleResposta(){
        const faq=document.querySelectorAll('.faq-lista dt')
        const faqResposta=document.querySelectorAll('.faq-lista dd')
        faqResposta[0].classList.add('resposta')
        
            function handleReesposta(index){
                faqResposta[index].classList.toggle('resposta')
            }
            faq.forEach((valor,index)=>{
            valor.addEventListener('click',()=>{
                handleReesposta(index)
            })
            })
        }
        handleResposta()
}
