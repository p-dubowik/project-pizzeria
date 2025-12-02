import { templates, select } from "../settings.js";
import utils from "../utils.js";
import AmountWidget from "./AmountWidget.js";
import DatePicker from "./DatePicker.js";
import HourPicker from "./HourPicker.js";


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

        thisBooking.dom.peopleAmount = thisBooking.dom.wrapper.querySelector(select.booking.peopleAmount);
        thisBooking.dom.hoursAmount = thisBooking.dom.wrapper.querySelector(select.booking.hoursAmount);

        thisBooking.dom.hourWrapper = thisBooking.dom.wrapper.querySelector(select.widgets.hourPicker.wrapper);
        thisBooking.dom.dateWrapper = thisBooking.dom.wrapper.querySelector(select.widgets.datePicker.wrapper);

    }

    initWidgets(){
        const thisBooking = this;

        thisBooking.peopleWidget = new AmountWidget(thisBooking.dom.peopleAmount);
        thisBooking.hoursWidget = new AmountWidget(thisBooking.dom.hoursAmount);

        thisBooking.datePicker = new DatePicker(thisBooking.dom.dateWrapper);
        thisBooking.hourPicker = new HourPicker(thisBooking.dom.hourWrapper);


        thisBooking.dom.peopleAmount.addEventListener('updated', function(event){
            console.log('...')
        });

        thisBooking.dom.hoursAmount.addEventListener('updated', function(event){
            console.log('...')
        });

    }
}

export default Booking;