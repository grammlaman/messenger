import {MainEventBus} from "../../libs/MainEventBus.lib.js";

export class View{
    constructor(model,params){
        const _ = this;
        _.actions = [];
        _.model = model;
        _.handle();
    }
    handle(){
        const _  = this;
        if(_.clickHandler)
            _.container.addEventListener('click',_.clickHandler);
        if(_.submitHandler)
            _.container.addEventListener('submit',_.submitHandler);
        if(_.changeHandler)
            _.container.addEventListener('change',_.changeHandler);
        if(_.inputHandler)
            _.container.addEventListener('input',_.inputHandler);
    }
    async onPage(){
        //console.log('loaded');
    }
 /*   for(let child of params['childes']){
    //parent.append(child);
    if(child['childes']){
    _.createTpl(child['childes'][0])
}
}*/
    createTpl(params) {
        const _ = this;
        if (!params['childes']) return params['el'];
        let parent = params['el'];
        for (let child of params['childes']) {
            parent.append(_.createTpl(child));
        }
        return  parent;
    }
    createEl(elemName,className,params){
        if(!elemName) return null;
        let element = document.createElement(elemName);
        if(className) element.className = className;
        if(params){
            for(let param in params){
                if(param === 'text'){
                    if(element.tagName === 'INPUT'){
                        element.value = params[param];
                    }else{
                        element.textContent = params[param];
                    }
                }else{
                    element.setAttribute(param,params[param]);
                }
            }
        }
        return element;

    }
    create(...elems){
        const _ = this,
            domArr = [];
        for(let elem of elems){
            let arrItem  = elem.split(':'),
                elemName = arrItem[0],
                elemCnt = arrItem[1] ? arrItem[1] : 1;
            for(let i = 0; i < elemCnt;i++){
                domArr.push(document.createElement(elemName));
            }
        }
        return domArr;
    }

}