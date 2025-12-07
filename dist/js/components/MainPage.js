import { select, templates } from "../settings.js";




class MainPage{
    constructor(element){
        const thisMain = this;

        thisMain.render(element);
        thisMain.initActions();

    }


    render(ref){
        const thisMain = this;

        const generatedHTML = templates.mainPage();

        thisMain.dom = {};

        thisMain.dom.wrapper = ref;
        thisMain.dom.wrapper.innerHTML = generatedHTML;

        thisMain.dom.options = thisMain.dom.wrapper.querySelector(select.mainPage.options);
        thisMain.dom.optionButtons = thisMain.dom.wrapper.querySelectorAll(select.mainPage.optionButtons);
        thisMain.dom.galleryWrapper = thisMain.dom.wrapper.querySelector(select.mainPage.gallery);

        const carouselElement = thisMain.dom.wrapper.querySelector('.carousel');

        new Flickity(carouselElement, {
            wrapAround: true,
            autoPlay: true,
            pageDots: true,
        })


    }

    initActions(){
        const thisMain = this;

        thisMain.dom.options.addEventListener('click', function(event){
            event.preventDefault();
            const option = event.target.closest('[data-id]');
            
            if(option){
                console.log('option clicked');
                const linkId = option.getAttribute('data-id');
                window.location.hash = '#/' + linkId;
            }
        })

        thisMain.dom.galleryWrapper.addEventListener('click', function(event){
            event.preventDefault();
            const likeButton = event.target.closest('.fa-heart');

            if(likeButton){
                event.target.classList.toggle('red');
            }
        })

    }
}

export default MainPage;