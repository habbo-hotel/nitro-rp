import { IMessageComposer } from '../../../../../api';
export declare class ApproveAllMembershipRequestsMessageComposer implements IMessageComposer<ConstructorParameters<typeof ApproveAllMembershipRequestsMessageComposer>> {
    private _data;
    constructor(groupId: number);
    getMessageArray(): [groupId: number];
    dispose(): void;
}
