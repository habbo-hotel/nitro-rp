import { IMessageEvent } from "../../../../../../api";
import { MessageEvent } from "../../../../../../events";
import { MyWeaponListParser } from "../../../parser/roleplay/combat/MyWeaponListParser";

export class MyWeaponListEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function) {
        super(callBack, MyWeaponListParser);
    }

    public getParser(): MyWeaponListParser {
        return this.parser as MyWeaponListParser;
    }
}
