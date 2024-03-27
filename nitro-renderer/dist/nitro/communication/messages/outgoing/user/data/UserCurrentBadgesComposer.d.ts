import { IMessageComposer } from '../../../../../../api';
export declare class UserCurrentBadgesComposer implements IMessageComposer<ConstructorParameters<typeof UserCurrentBadgesComposer>> {
    private _data;
    constructor(userId: number);
    getMessageArray(): [userId: number];
    dispose(): void;
}
