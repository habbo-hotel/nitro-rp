import { IMessageComposer } from "../../../../../../api";

export class PoliceStunComposer implements IMessageComposer<ConstructorParameters<typeof PoliceStunComposer>>
{
    private _data: ConstructorParameters<typeof PoliceStunComposer>;

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