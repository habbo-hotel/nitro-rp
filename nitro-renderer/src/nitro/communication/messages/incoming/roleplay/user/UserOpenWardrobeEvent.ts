import { IMessageEvent } from "../../../../../../api";
import { MessageEvent } from "../../../../../../events";
import { UserOpenWardrobeEventParser } from "../../../parser/roleplay/user/UserOpenWardrobeEventParser";

export class UserOpenWardrobeEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, UserOpenWardrobeEventParser);
    }

    public getParser(): UserOpenWardrobeEventParser
    {
        return this.parser as UserOpenWardrobeEventParser;
    }
}
