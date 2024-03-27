import { IMessageComposer } from '../../../../../api';
export declare class GroupMembershipDeclineComposer implements IMessageComposer<ConstructorParameters<typeof GroupMembershipDeclineComposer>> {
    private _data;
    constructor(groupId: number, memberId: number);
    getMessageArray(): [groupId: number, memberId: number];
    dispose(): void;
}
