import { IMessageDataWrapper, IMessageParser } from "../../../../../../api";

export interface GangInfoData {
    id: number;
    userID: number;
    roomID: number;
    name: string;
    description: string;
    badgeCode: string;
}

export class GangInfoParser implements IMessageParser
{
    private _id: number;
    private _userID: number;
    private _roomID: number;
    private _name: string;
    private _description: string;
    private _badgeCode: string;

    public flush(): boolean
    {
        this._id = 0;
        this._userID = 0;
        this._roomID = 0;
        this._name = '';
        this._description = '';
        this._badgeCode = '';
        return true;
    }

    public parse(wrapper: IMessageDataWrapper): boolean
    {
        if(!wrapper) return false;

        this._id = wrapper.readInt();
        this._userID = wrapper.readInt();
        this._roomID = wrapper.readInt();
        this._name = wrapper.readString();
        this._description = wrapper.readString();
        this._badgeCode = wrapper.readString();

        return true;
    }

    public get data(): GangInfoData {
        return {
            id: this._id,
            userID: this._userID,
            roomID: this._roomID,
            name: this._name,
            description: this._description,
            badgeCode: this._badgeCode,
        }
    }
}
