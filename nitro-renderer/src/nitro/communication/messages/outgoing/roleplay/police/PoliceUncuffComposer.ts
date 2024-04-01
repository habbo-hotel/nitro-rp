import { IMessageComposer } from "../../../../../../api";

export class PoliceUncuffComposer implements IMessageComposer<ConstructorParameters<typeof PoliceUncuffComposer>>
{
    private _data: ConstructorParameters<typeof PoliceUncuffComposer>;

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