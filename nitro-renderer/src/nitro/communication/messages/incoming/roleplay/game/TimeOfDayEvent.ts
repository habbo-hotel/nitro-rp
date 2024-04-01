import { IMessageEvent } from "../../../../../../api";
import { MessageEvent } from "../../../../../../events";
import { TimeOfDayEventParser } from "../../../parser/roleplay/game/TimeOfDayEventParser";

export class TimeOfDayEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, TimeOfDayEventParser);
    }

    public getParser(): TimeOfDayEventParser
    {
        return this.parser as TimeOfDayEventParser;
    }
}
