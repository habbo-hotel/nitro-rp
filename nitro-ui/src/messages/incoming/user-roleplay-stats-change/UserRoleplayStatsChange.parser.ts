import { IMessageDataWrapper, IMessageParser } from "@nitro-rp/renderer";

export class UserRoleplayStatsChangeParser implements IMessageParser
{
    private _result: number;

    public flush(): boolean
    {
        this._result = -1;

        return true;
    }

    public parse(wrapper: IMessageDataWrapper): boolean
    {
        if(!wrapper) return false;

        this._result = wrapper.readInt();

        return true;
    }

    public get result(): number
    {
        return this._result;
    }
}