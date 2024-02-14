class Card extends HTMLElement{
    constructor(){
        super();
        // this.innerHTML=`Ducat India`;
        this.innerHTML=this.getAttribute('name')

    }
}

window.customElements.define('card-app',Card);

