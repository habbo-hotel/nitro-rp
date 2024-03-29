import { IMessageComposer } from "../../../../../../api";

export class GangPositionInfoQueryComposer implements IMessageComposer<ConstructorParameters<typeof GangPositionInfoQueryComposer>>
{
    private _data: ConstructorParameters<typeof GangPositionInfoQueryComposer>;

    constructor(gangID: number, gangPositionID: number)
    {
        this._data = [gangID, gangPositionID];
    }

    public getMessageArray()
    {
        return this._data;
    }

    public dispose(): void
    {
        return;
    }
}