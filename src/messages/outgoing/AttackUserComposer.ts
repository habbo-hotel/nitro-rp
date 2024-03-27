import { IMessageComposer } from "@nitrots/nitro-renderer";

export class AttackUserComposer implements IMessageComposer<ConstructorParameters<typeof AttackUserComposer>>
{
    private _data: ConstructorParameters<typeof AttackUserComposer>;

    constructor(userId: number)
    {
        this._data = [userId];
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