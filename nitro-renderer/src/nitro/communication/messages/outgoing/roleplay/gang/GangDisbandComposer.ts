import { IMessageComposer } from "../../../../../../api";

export class GangDisbandComposer implements IMessageComposer<ConstructorParameters<typeof GangDisbandComposer>>
{
    private _data: ConstructorParameters<typeof GangDisbandComposer>;

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