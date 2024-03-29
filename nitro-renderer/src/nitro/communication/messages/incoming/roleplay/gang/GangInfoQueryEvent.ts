import { IMessageEvent } from "../../../../../../api";
import { MessageEvent } from "../../../../../../events";
import { GangInfoParser } from "../../../parser/roleplay/gang/GangInfoParser";

export class GangInfoQueryEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, GangInfoParser);
    }

    public getParser(): GangInfoParser
    {
        return this.parser as GangInfoParser;
    }
}
