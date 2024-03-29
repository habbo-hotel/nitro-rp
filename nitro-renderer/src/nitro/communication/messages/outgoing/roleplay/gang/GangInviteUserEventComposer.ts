import { IMessageComposer } from "../../../../../../api";

export class GangInviteUserComposer implements IMessageComposer<ConstructorParameters<typeof GangInviteUserComposer>>
{
    private _data: ConstructorParameters<typeof GangInviteUserComposer>;

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