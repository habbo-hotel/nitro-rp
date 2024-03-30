import { IMessageDataWrapper, IMessageParser } from "../../../../../../api";

export interface GangPositionInfoData {
    id: number;
    userID: number;
    name: string;
    description: string;
    
}

export class GangInfoPositionParser implements IMessageParser
{
    private _id: number;
    private _userID: number;
    private _name: string;
    private _description: string;

    public flush(): boolean
    {
        this._id = 0;
        this._userID = 0;
        this._name = '';
        this._description = '';
        return true;
    }

    public parse(wrapper: IMessageDataWrapper): boolean
    {
        if(!wrapper) return false;

        this._id = wrapper.readInt();
        this._userID = wrapper.readInt();
        this._name = wrapper.readString();
        this._description = wrapper.readString();

        return true;
    }

    public get data(): GangPositionInfoData {
        return {
            id: this._id,
            userID: this._userID,
            name: this._name,
            description: this._description,
        }
    }
}
