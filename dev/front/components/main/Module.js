import {MainEventBus} from "../../libs/MainEventBus.lib.js";
export class Module{
    constructor(View,Ctrl,Model){
        const  _ = this;
        _.model = Model;
        _.view = View;
        _.ctrl = Ctrl;
    }


    remove(){
        const _ = this;
        if(_.ctrl.container){
            if(_.ctrl.clickHandler) _.ctrl.container.removeEventListener('click',_.ctrl.clickHandler);
            if(_.ctrl.changeHandler) _.ctrl.container.removeEventListener('change',_.ctrl.changeHandler);
            if(_.ctrl.submitHandler) _.ctrl.container.removeEventListener('submit',_.ctrl.submitHandler);
        }
        //
        if(_.view.container){
            if(_.view.clickHandler) _.view.container.removeEventListener('click',_.view.clickHandler);
            if(_.view.changeHandler) _.view.container.removeEventListener('change',_.view.changeHandler);
        }
        //MainEventBus.remove('Pager','pageReady','DriversPageReadyShowTable');
    }
    init(){}
}