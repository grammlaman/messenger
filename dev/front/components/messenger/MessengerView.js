import { View } from "../main/View.js";
import { MainEventBus } from "../../libs/MainEventBus.lib.js";

export class MessengerView extends View {
    constructor(model) {
        super(model);
        const _ = this;
    }
    //Создает контейнер под мессенджер
    createMessengerTpl(){
        const _ = this;
        let
            cont = document.createElement('CORE-MESS'),
            messengerBody = document.createElement('CORE-MESS-BODY');
    }
    //Отрисовывает мессенджер
    drawMessenger(){
        const _ = this;
        _.createMessengerTpl();
    }
}