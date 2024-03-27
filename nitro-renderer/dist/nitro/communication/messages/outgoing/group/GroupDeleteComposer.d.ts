import { IMessageComposer } from '../../../../../api';
export declare class GroupDeleteComposer implements IMessageComposer<ConstructorParameters<typeof GroupDeleteComposer>> {
    private _data;
    constructor(groupId: number);
    getMessageArray(): [groupId: number];
    dispose(): void;
}
