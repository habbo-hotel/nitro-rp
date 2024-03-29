import { IMessageDataWrapper, IMessageParser } from "../../../../../../api";

export interface CorpPositionInfoData {
    id: number;
    userID: number;
    roomID: number;
    name: string;
    description: string;
    canHire: boolean;
    canFire: boolean;
    canPromote: boolean;
    canDemote: boolean;
}

export class CorpPositionInfoParser implements IMessageParser
{
    private _id: number;
    private _userID: number;
    private _roomID: number;
    private _name: string;
    private _description: string;
    private _canHire: boolean;
    private _canFire: boolean;
    private _canPromote: boolean;
    private _canDemote: boolean;

    public flush(): boolean
    {
        this._id = 0;
        this._userID = 0;
        this._roomID = 0;
        this._name = '';
        this._description = '';
        this._canHire = false;
        this._canFire = false;
        this._canPromote = false;
        this._canDemote = false;
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
        this._canHire = wrapper.readBoolean();
        this._canFire = wrapper.readBoolean();
        this._canPromote = wrapper.readBoolean();
        this._canDemote = wrapper.readBoolean();

        return true;
    }

    public get data(): CorpPositionInfoData {
        return {
            id: this._id,
            userID: this._userID,
            roomID: this._roomID,
            name: this._name,
            description: this._description,
            canHire: this._canHire,
            canFire: this._canFire,
            canPromote: this._canPromote,
            canDemote: this._canDemote,
        }
    }
}
