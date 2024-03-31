import { IMessageComposer } from '../../../../../api';
import { GroupType } from '../../parser';

export class GroupSaveInformationComposer implements IMessageComposer<ConstructorParameters<typeof GroupSaveInformationComposer>>
{
    private _data: ConstructorParameters<typeof GroupSaveInformationComposer>;

    constructor(groupId: number, type: GroupType, title: string, description: string)
    {
        this._data = [groupId, type, title, description];
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
