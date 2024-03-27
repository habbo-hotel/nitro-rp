import { IMessageComposer } from '../../../../../api';
export declare class GroupMembersComposer implements IMessageComposer<ConstructorParameters<typeof GroupMembersComposer>> {
    private _data;
    constructor(groupId: number, pageId: number, query: string, levelId: number);
    getMessageArray(): [groupId: number, pageId: number, query: string, levelId: number];
    dispose(): void;
}
