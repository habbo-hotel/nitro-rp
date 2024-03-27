import { IMessageComposer } from '../../../../../api';
export declare class DeclineFriendMessageComposer implements IMessageComposer<ConstructorParameters<typeof DeclineFriendMessageComposer>> {
    private _data;
    constructor(removeAll: boolean, ...userIds: number[]);
    getMessageArray(): [removeAll: boolean, ...userIds: number[]];
    dispose(): void;
}
