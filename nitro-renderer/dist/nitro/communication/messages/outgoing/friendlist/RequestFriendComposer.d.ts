import { IMessageComposer } from '../../../../../api';
export declare class RequestFriendComposer implements IMessageComposer<ConstructorParameters<typeof RequestFriendComposer>> {
    private _data;
    constructor(username: string);
    getMessageArray(): [username: string];
    dispose(): void;
}
