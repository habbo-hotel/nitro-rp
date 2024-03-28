import { IMessageDataWrapper, IMessageParser } from "../../../../../api";

export interface UserRoleplayStatsChangeData {
    userID: number;
    healthCurrent: number;
    healthMaximum: number;
    corporationID: number;
    corporationPositionID: number;
    gangID: number;
    gangPositionID: number;
}


export class UserRoleplayStatsChangeParser implements IMessageParser
{
    private _userID: number;
    private _healthCurrent: number;
    private _healthMaximum: number;
    private _corporationID: number;
    private _corporationPositionID: number;
    private _gangID?: number;
    private _gangPositionID?: number;

    public flush(): boolean
    {
        this._userID = 0;
        this._healthCurrent = 0;
        this._healthMaximum = 0;
        this._corporationID = 0;
        this._corporationPositionID = 0;
        this._gangID = 0;
        this._gangPositionID = 0;
        return true;
    }

    public parse(wrapper: IMessageDataWrapper): boolean
    {
        if(!wrapper) return false;

        this._userID = wrapper.readInt();
        this._healthCurrent = wrapper.readInt();
        this._healthMaximum = wrapper.readInt();
        this._corporationID = wrapper.readInt();
        this._corporationPositionID = wrapper.readInt();
        this._gangID = wrapper.readInt();
        this._gangPositionID = wrapper.readInt();

        return true;
    }

    public get data(): UserRoleplayStatsChangeData {
        return {
            userID: this._userID,
            healthCurrent: this._healthCurrent,
            healthMaximum: this._healthMaximum,
            corporationID: this._corporationID,
            corporationPositionID: this._corporationPositionID,
            gangID: this._gangID,
            gangPositionID: this._gangPositionID,
        }
    }
}
