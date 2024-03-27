import { IMessageComposer } from "../../../../../api";

export class AttackUserComposer implements IMessageComposer<ConstructorParameters<typeof AttackUserComposer>>
{
    private _data: ConstructorParameters<typeof AttackUserComposer>;

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