import { IMessageComposer } from '../../../../../api';
export declare class UnblockGroupMemberMessageComposer implements IMessageComposer<ConstructorParameters<typeof UnblockGroupMemberMessageComposer>> {
    private _data;
    constructor(groupId: number, userId: number);
    getMessageArray(): [groupId: number, userId: number];
    dispose(): void;
}
