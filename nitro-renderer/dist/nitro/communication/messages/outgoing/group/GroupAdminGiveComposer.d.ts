import { IMessageComposer } from '../../../../../api';
export declare class GroupAdminGiveComposer implements IMessageComposer<ConstructorParameters<typeof GroupAdminGiveComposer>> {
    private _data;
    constructor(groupId: number, memberId: number);
    getMessageArray(): [groupId: number, memberId: number];
    dispose(): void;
}
