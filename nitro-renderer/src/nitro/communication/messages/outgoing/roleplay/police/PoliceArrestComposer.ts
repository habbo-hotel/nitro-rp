import { IMessageComposer } from "../../../../../../api";

export class PoliceArrestComposer implements IMessageComposer<ConstructorParameters<typeof PoliceArrestComposer>>
{
    private _data: ConstructorParameters<typeof PoliceArrestComposer>;

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