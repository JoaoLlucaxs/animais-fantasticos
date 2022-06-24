export default function imagemDescricao(){
    function descricao(){
        const imagem=document.querySelectorAll('.js-lista li')
        const descricao=document.querySelectorAll('.js-descricao section')
        descricao[0].classList.add('active')
        
        const img=Array.from(imagem)
        
        
        function handleClick(index){
            descricao.forEach((item)=>{
                item.classList.remove('active')
            })
            descricao[index].classList.add('active')
        }
        
        
        img.forEach((item,index)=>{
            item.addEventListener('click',()=>{
                handleClick(index)
            })
        })
        }
        descricao()
}