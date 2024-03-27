import { IMessageComposer } from "../../../../../api";

export class CorpDemoteUserComposer implements IMessageComposer<ConstructorParameters<typeof CorpDemoteUserComposer>>
{
    private _data: ConstructorParameters<typeof CorpDemoteUserComposer>;

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