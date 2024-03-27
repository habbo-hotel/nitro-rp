import { IMessageComposer } from '../../../../../api';
export declare class RemoveFriendComposer implements IMessageComposer<ConstructorParameters<typeof RemoveFriendComposer>> {
    private _data;
    constructor(...userIds: number[]);
    getMessageArray(): number[];
    dispose(): void;
}
