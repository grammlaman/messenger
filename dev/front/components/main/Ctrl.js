import { systemConts } from '../../libs/Conts.lib.js'
import {MainEventBus} from "../../libs/MainEventBus.lib.js";
let trigger = function(item,currentAction){
    let
        rawAction = item.dataset[currentAction].split(':'),
        component = rawAction[0],
        action = rawAction[1];
    MainEventBus.trigger(component,action,item);
}
let triggerWithEvent = function(data,currentAction){
    let
        rawAction = data['item'].dataset[currentAction].split(':'),
        component = rawAction[0],
        action = rawAction[1];
    MainEventBus.trigger(component,action,data);
}
export class Ctrl{
    constructor(model,view,params){
        const _ = this;
        _.container = systemConts['main'];
        _.handle();
        _.model = model;
    }

    clickHandler(e){
        const _ = this;
        //e.preventDefault();
        let item = e.target;
        if(!item) return;
        while(item != _) {
            if( ('clickAction' in item.dataset) ){
                trigger(item,'clickAction');
                return;
            }
          /*  if( ('ctrlAction' in item.dataset) ){
                trigger(item,'ctrlAction');
                return;
            }*/
            item = item.parentNode;
        }

    }
    focusOutHandler(e){
        const _ = this;
        let item = e.target;
        if( ('outfocusAction' in item.dataset) ){
            trigger(item,'outfocusAction');
            return;
        }
    }
    changeHandler(e){
        const _ = this;
        let item = e.target;
        if( ('changeAction' in item.dataset) ){
            trigger(item,'changeAction');
            return;
        }
    }
    inputHandler(e){
        const _ = this;
        let item = e.target;
        if( ('inputAction' in item.dataset) ){
            
            trigger(item,'inputAction');
            return;
        }
    }
    keyUpHandler(e){
        const _ = this;
        let item = e.target;
        if( ('keyupAction' in item.dataset) ){
            triggerWithEvent({'item':item,'event':e},'keyupAction');
            return;
        }
    }
    submitHandler(e){
        e.preventDefault();
    }
    handle(){
        const _  = this;
        if(_.focusOutHandler) _.container.addEventListener('focusout',_.focusOutHandler);
        if(_.submitHandler) _.container.addEventListener('submit',_.submitHandler);
        if(_.clickHandler)  _.container.addEventListener('click', _.clickHandler);
        if(_.changeHandler) _.container.addEventListener('change',_.changeHandler);
        if(_.inputHandler) _.container.addEventListener('input',_.inputHandler);
        if(_.keyUpHandler) _.container.addEventListener('keyup',_.keyUpHandler);
    }
}