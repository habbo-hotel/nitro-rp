import { IMessageDataWrapper, IMessageParser } from "../../../../../../api";

export class TimeOfDayEventParser implements IMessageParser
{
    private _serverTime: string;

    public flush(): boolean
    {
        this._serverTime = '';
        return true;
    }

    public parse(wrapper: IMessageDataWrapper): boolean
    {
        if(!wrapper) return false;

        this._serverTime = wrapper.readString();

        return true;
    }

    public get serverTime(): string {
        return this._serverTime;
    }
}
