import { IMessageComposer } from '../../../../../api';
export declare class AcceptFriendMessageComposer implements IMessageComposer<ConstructorParameters<typeof AcceptFriendMessageComposer>> {
    private _data;
    constructor(...userIds: number[]);
    getMessageArray(): number[];
    dispose(): void;
}
