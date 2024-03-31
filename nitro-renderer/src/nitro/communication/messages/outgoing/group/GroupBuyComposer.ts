import { IMessageComposer } from '../../../../../api';
import { GroupType } from '../../parser';

export class GroupBuyComposer implements IMessageComposer<any[]>
{
    private _data: any[];

    constructor(type: GroupType, name: string, description: string, roomId: number, colorA: number, colorB: number, badge: number[])
    {
        console.log(type)
        this._data = [type, name, description, roomId, colorA, colorB, badge.length, ...badge];
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
