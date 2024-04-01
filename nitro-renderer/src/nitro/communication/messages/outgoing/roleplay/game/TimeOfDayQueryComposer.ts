import { IMessageComposer } from "../../../../../../api";

export class TimeOfDayQueryComposer implements IMessageComposer<ConstructorParameters<typeof TimeOfDayQueryComposer>>
{
    private _data: ConstructorParameters<typeof TimeOfDayQueryComposer>;

    constructor()
    {
        this._data = [];
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