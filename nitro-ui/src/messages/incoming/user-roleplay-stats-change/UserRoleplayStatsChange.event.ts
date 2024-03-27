import { IMessageEvent, MessageEvent } from "@nitro-rp/renderer";
import { UserRoleplayStatsChangeParser } from "./UserRoleplayStatsChange.parser";


export class UserRoleplayStatsChangeEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, UserRoleplayStatsChangeParser);
    }

    public getParser(): UserRoleplayStatsChangeParser
    {
        return this.parser as UserRoleplayStatsChangeParser;
    }
}