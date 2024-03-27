import { IMessageComposer } from "../../../../../api";

export class GangLeaveComposer implements IMessageComposer<ConstructorParameters<typeof GangLeaveComposer>>
{
    private _data: ConstructorParameters<typeof GangLeaveComposer>;

    constructor()
    {
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