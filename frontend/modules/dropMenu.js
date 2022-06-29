
import outsideClick from './outsideClick.js';

export default class initDropdownMenu {
  constructor(drop){
    this.dropdownMenus=document.querySelectorAll(drop);
  }

  handleClick(event) {
    event.preventDefault();
    this.classList.add('active');
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('active');
    });
  };

    initDropDown(){
      this.dropdownMenus.forEach(menu => {
        ['touchstart', 'click'].forEach(userEvent => {
          menu.addEventListener(userEvent, this.handleClick);
        });
      });
    }
    
    init(){
      if(this.dropdownMenus.length){
        this.initDropDown()
      }
    }
}

