import { IMessageComposer } from '../../../../../api';
export declare class GroupMembershipAcceptComposer implements IMessageComposer<ConstructorParameters<typeof GroupMembershipAcceptComposer>> {
    private _data;
    constructor(groupId: number, memberId: number);
    getMessageArray(): [groupId: number, memberId: number];
    dispose(): void;
}
