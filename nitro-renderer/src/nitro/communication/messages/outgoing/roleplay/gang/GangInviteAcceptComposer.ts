import { IMessageComposer } from "../../../../../../api";

export class GangInviteAcceptComposer implements IMessageComposer<ConstructorParameters<typeof GangInviteAcceptComposer>>
{
    private _data: ConstructorParameters<typeof GangInviteAcceptComposer>;

    constructor(gangName: string)
    {
        this._data = [gangName];
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