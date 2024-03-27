import { IMessageComposer } from '../../../../../../api';
export declare class IgnoreUserIdComposer implements IMessageComposer<ConstructorParameters<typeof IgnoreUserIdComposer>> {
    private _data;
    constructor(userId: number);
    getMessageArray(): [userId: number];
    dispose(): void;
}
