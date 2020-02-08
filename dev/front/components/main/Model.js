import { _Fetch } from '../../libs/Fetch.lib.js';
import { MainEventBus } from "../../libs/MainEventBus.lib.js";
export class Model{
    constructor(){
        const _ = this;
        _.xhr = new _Fetch();
        _.dirPath = '/front/components/';
        _.dirPath = 'http://gengine/front/components/';
       // _.componentName ='';
    }
    async handle(data,method = 'GET'){
        const _ = this;
       
        if(!data['componentName']) data['componentName'] = _.componentName;
        if(!data['type']) data['type'] = 'class';
        return await _.xhr.fetch(method,{
            path: `${ _.dirPath }handle.php`,
            data: data
        });
    }
    async fileUpload(path,fileName,file){
        const _ = this;
        return await _.xhr.fileUpload(path,fileName,file);
    }
}