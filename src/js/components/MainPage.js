import { select, templates } from "../settings.js";




class MainPage{
    constructor(element){
        const thisMain = this;

        thisMain.render(element);

    }

    getElements(){

    }

    render(ref){
        const thisMain = this;

        const generatedHTML = templates.mainPage();

        thisMain.dom = {};

        thisMain.dom.wrapper = ref;
        thisMain.dom.wrapper.innerHTML = generatedHTML;

    }

}

export default MainPage;