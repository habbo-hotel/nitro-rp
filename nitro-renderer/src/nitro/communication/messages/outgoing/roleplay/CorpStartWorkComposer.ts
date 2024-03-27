import { IMessageComposer } from "../../../../../api";

export class CorpStartWorkComposer implements IMessageComposer<ConstructorParameters<typeof CorpStartWorkComposer>>
{
    private _data: ConstructorParameters<typeof CorpStartWorkComposer>;

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