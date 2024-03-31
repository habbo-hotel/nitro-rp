import { IMessageDataWrapper, IMessageParser } from '../../../../../api';

export class GroupPurchasedParser implements IMessageParser
{

    private _groupId: number;
    private _roomId: number;

    flush(): boolean
    {
        this._roomId = 0;
        this._groupId = 0;

        return true;
    }

    parse(wrapper: IMessageDataWrapper): boolean
    {
        if(!wrapper) return false;
        this._groupId = wrapper.readInt();
        this._roomId = wrapper.readInt();

        return true;
    }

    public get roomId(): number
    {
        return this._roomId;
    }

    public get guildId(): number
    {
        return this._groupId;
    }
}
