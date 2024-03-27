import { IMessageComposer } from '../../../../../api';
export declare class GroupAdminTakeComposer implements IMessageComposer<ConstructorParameters<typeof GroupAdminTakeComposer>> {
    private _data;
    constructor(groupId: number, memberId: number);
    getMessageArray(): [groupId: number, memberId: number];
    dispose(): void;
}
