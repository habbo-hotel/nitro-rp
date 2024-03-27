import { IMessageComposer } from '../../../../../api';
export declare class GroupConfirmRemoveMemberComposer implements IMessageComposer<ConstructorParameters<typeof GroupConfirmRemoveMemberComposer>> {
    private _data;
    constructor(groupId: number, memberId: number);
    getMessageArray(): [groupId: number, memberId: number];
    dispose(): void;
}
