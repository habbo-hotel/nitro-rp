import { IMessageComposer } from '../../../../../../api';
export declare class UserProfileComposer implements IMessageComposer<ConstructorParameters<typeof UserProfileComposer>> {
    private _data;
    constructor(userId: number, flag?: boolean);
    getMessageArray(): [userId: number, flag?: boolean];
    dispose(): void;
}
