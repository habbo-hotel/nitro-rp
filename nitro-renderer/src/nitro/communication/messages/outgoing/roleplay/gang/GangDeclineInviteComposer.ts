import { IMessageComposer } from "../../../../../../api";

export class GangDeclineInviteComposer implements IMessageComposer<ConstructorParameters<typeof GangDeclineInviteComposer>>
{
    private _data: ConstructorParameters<typeof GangDeclineInviteComposer>;

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