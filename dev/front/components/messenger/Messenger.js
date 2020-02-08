import { Module } from "../main/Module.js";
import { MessengerModel } from "./MessengerModel.js";
import { MessengerView } from "./MessengerView.js";
import { MessengerCtrl } from "./MessengerCtrl.js";
import { MainEventBus } from "../../libs/MainEventBus.lib.js";

export class Messenger extends Module {
    constructor() {
        let
            model = new MessengerModel(),
            view = new MessengerView(model),
            ctrl = new MessengerCtrl(model, view);
        super(view, ctrl, model);
        const _ = this;
    }
}