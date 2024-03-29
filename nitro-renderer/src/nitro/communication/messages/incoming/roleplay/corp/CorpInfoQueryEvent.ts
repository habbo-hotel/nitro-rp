import { IMessageEvent } from "../../../../../../api";
import { MessageEvent } from "../../../../../../events";
import { CorpInfoParser } from "../../../parser/roleplay/corp/CorpInfoParser";

export class CorpInfoQueryEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, CorpInfoParser);
    }

    public getParser(): CorpInfoParser
    {
        return this.parser as CorpInfoParser;
    }
}
