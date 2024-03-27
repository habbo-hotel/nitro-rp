import { IMessageComposer } from "../../../../../api";

export class CorpAcceptJobComposer implements IMessageComposer<ConstructorParameters<typeof CorpAcceptJobComposer>>
{
    private _data: ConstructorParameters<typeof CorpAcceptJobComposer>;

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