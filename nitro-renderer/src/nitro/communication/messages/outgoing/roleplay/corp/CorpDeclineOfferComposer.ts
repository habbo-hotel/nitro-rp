import { IMessageComposer } from "../../../../../../api";

export class CorpDenyOfferComposer implements IMessageComposer<ConstructorParameters<typeof CorpDenyOfferComposer>>
{
    private _data: ConstructorParameters<typeof CorpDenyOfferComposer>;

    constructor(corpName: string)
    {
        this._data = [corpName];
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