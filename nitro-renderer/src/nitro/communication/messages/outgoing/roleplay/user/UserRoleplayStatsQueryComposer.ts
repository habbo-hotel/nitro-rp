import { IMessageComposer } from "../../../../../../api";

export class UserRoleplayStatsQueryComposer implements IMessageComposer<ConstructorParameters<typeof UserRoleplayStatsQueryComposer>>
{
    private _data: ConstructorParameters<typeof UserRoleplayStatsQueryComposer>;

    constructor(userID: number)
    {
        this._data = [userID];
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