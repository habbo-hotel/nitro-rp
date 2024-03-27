import { IMessageComposer } from "../../../../../api";

export class CorpOfferUserJobComposer implements IMessageComposer<ConstructorParameters<typeof CorpOfferUserJobComposer>>
{
    private _data: ConstructorParameters<typeof CorpOfferUserJobComposer>;

    constructor(username: string)
    {
        this._data = [username];
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