import { IMessageEvent } from "../../../../../../api";
import { MessageEvent } from "../../../../../../events";
import { GangInfoPositionParser } from "../../../parser/roleplay/gang/GangInfoPositionParser";

export class GangPositionInfoQueryEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, GangInfoPositionParser);
    }

    public getParser(): GangInfoPositionParser
    {
        return this.parser as GangInfoPositionParser;
    }
}
