import { IMessageComposer } from "../../../../../../api";

export class PoliceEscortComposer implements IMessageComposer<ConstructorParameters<typeof PoliceEscortComposer>>
{
    private _data: ConstructorParameters<typeof PoliceEscortComposer>;

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