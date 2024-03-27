import { IMessageComposer } from "../../../../../api";

export class CorpFireUserComposer implements IMessageComposer<ConstructorParameters<typeof CorpFireUserComposer>>
{
    private _data: ConstructorParameters<typeof CorpFireUserComposer>;

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