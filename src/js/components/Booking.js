import { templates, select } from "../settings.js";
import utils from "../utils.js";
import AmountWidget from "./AmountWidget.js";


class Booking{
    constructor(element){
        const thisBooking = this;

        thisBooking.render(element);
        thisBooking.initWidgets();

    }

    render(reference){
        const thisBooking = this;

        const generatedHTML = templates.bookingWidget();

        thisBooking.dom = {};

        thisBooking.dom.wrapper = reference;
        thisBooking.dom.wrapper.innerHTML = generatedHTML;

        thisBooking.dom.peopleAmount = document.querySelector(select.booking.peopleAmount);
        thisBooking.dom.hoursAmount = document.querySelector(select.booking.hoursAmount);

    }

    initWidgets(){
        const thisBooking = this;

        thisBooking.peopleWidget = new AmountWidget(thisBooking.dom.peopleAmount);
        thisBooking.hoursWidget = new AmountWidget(thisBooking.dom.hoursAmount);

        thisBooking.dom.peopleAmount.addEventListener('updated', function(event){
            console.log('...')
        });

        thisBooking.dom.hoursAmount.addEventListener('updated', function(event){
            console.log('...')
        });

    }
}

export default Booking;