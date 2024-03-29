import { IMessageComposer } from "../../../../../../api";

export class GangInfoQueryComposer implements IMessageComposer<ConstructorParameters<typeof GangInfoQueryComposer>>
{
    private _data: ConstructorParameters<typeof GangInfoQueryComposer>;

    constructor(gangID: number)
    {
        this._data = [gangID];
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