export default function caixaModal(){
    function caixaLogin(){
        const abrirModal=document.querySelector('a[data-modal="abrir"]')
        const caixaSpan=document.querySelector('.modal-container')
        const fecharModal=document.querySelector('.fechar')
        
        function abrir(event){
            event.preventDefault()
            caixaSpan.classList.add('ativo')
        }
        
        
        function fechar(event){
            event.preventDefault()
            caixaSpan.classList.remove('ativo')
        }
        
        function cliqueForaModal(event){
            if (event.target === this){
                fechar(event)
            }
        }
        
        if(abrirModal && caixaSpan && fecharModal){
        
        
        abrirModal.addEventListener('click', abrir)
        fecharModal.addEventListener('click',fechar)
        caixaSpan.addEventListener('click',cliqueForaModal)
        }}
        caixaLogin()
        
}
