import { IMessageComposer } from '../../../../../api';
export declare class FollowFriendMessageComposer implements IMessageComposer<ConstructorParameters<typeof FollowFriendMessageComposer>> {
    private _data;
    constructor(userId: number);
    getMessageArray(): [userId: number];
    dispose(): void;
}
