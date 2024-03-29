import { IMessageComposer } from "../../../../../../api";

export class CorpPositionInfoQueryComposer implements IMessageComposer<ConstructorParameters<typeof CorpPositionInfoQueryComposer>>
{
    private _data: ConstructorParameters<typeof CorpPositionInfoQueryComposer>;

    constructor(corpID: number, corpPositionID: number)
    {
        this._data = [corpID, corpPositionID];
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