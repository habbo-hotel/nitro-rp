import { IMessageComposer } from '../../../../../api';
export declare class GetUserChatlogMessageComposer implements IMessageComposer<ConstructorParameters<typeof GetUserChatlogMessageComposer>> {
    private _data;
    constructor(userId: number);
    getMessageArray(): [userId: number];
    dispose(): void;
}
