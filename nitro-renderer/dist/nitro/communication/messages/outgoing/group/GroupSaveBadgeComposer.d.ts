import { IMessageComposer } from '../../../../../api';
export declare class GroupSaveBadgeComposer implements IMessageComposer<any[]> {
    private _data;
    constructor(groupId: number, badge: number[]);
    getMessageArray(): any[];
    dispose(): void;
}
