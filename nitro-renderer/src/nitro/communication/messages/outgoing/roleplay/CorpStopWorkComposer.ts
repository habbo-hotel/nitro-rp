import { IMessageComposer } from "../../../../../api";

export class CorpStopWorkComposer implements IMessageComposer<ConstructorParameters<typeof CorpStopWorkComposer>>
{
    private _data: ConstructorParameters<typeof CorpStopWorkComposer>;

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