import { IMessageEvent } from "../../../../../api";
import { MessageEvent } from "../../../../../events";
import { UserRoleplayStatsChangeParser } from "../../parser/roleplay/UserRoleplayStatsChangeParser";

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
