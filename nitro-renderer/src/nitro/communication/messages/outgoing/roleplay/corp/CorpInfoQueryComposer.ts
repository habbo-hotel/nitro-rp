import { IMessageComposer } from "../../../../../../api";

export class CorpInfoQueryComposer implements IMessageComposer<ConstructorParameters<typeof CorpInfoQueryComposer>>
{
    private _data: ConstructorParameters<typeof CorpInfoQueryComposer>;

    constructor(corpID: number)
    {
        this._data = [corpID];
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