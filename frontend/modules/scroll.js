
export default class scrollSuave{
   constructor(links,options){
     this.linksInternos=document.querySelectorAll(links)

     if(options === undefined){
        this.options={
            behavior:'smooth',
            block:'start'
        }
     }else{
        this.options=options
     }
     this.scrolSuave=this.scrolSuave.bind(this)
   }
    
    scrolSuave(event){
            event.preventDefault()
            const href=event.currentTarget.getAttribute('href')
            const section=document.querySelector(href)
    
            section.scrollIntoView(this.options)
    }

    addlinkEvent(){
        this.linksInternos.forEach((item)=>{
            item.addEventListener('click',this.scrolSuave)
        })
}

    init(){
        if(this.linksInternos.length){
            this.addlinkEvent()
        }
    }
}
