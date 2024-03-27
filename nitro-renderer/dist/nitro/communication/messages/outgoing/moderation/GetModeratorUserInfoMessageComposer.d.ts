import { IMessageComposer } from '../../../../../api';
export declare class GetModeratorUserInfoMessageComposer implements IMessageComposer<ConstructorParameters<typeof GetModeratorUserInfoMessageComposer>> {
    private _data;
    constructor(userId: number);
    getMessageArray(): [userId: number];
    dispose(): void;
}
