import { IMessageComposer } from '../../../../../api';
export declare class GroupRemoveMemberComposer implements IMessageComposer<ConstructorParameters<typeof GroupRemoveMemberComposer>> {
    private _data;
    constructor(groupId: number, memberId: number);
    getMessageArray(): [groupId: number, memberId: number];
    dispose(): void;
}
