import { IMessageComposer } from '../../../../../api';
export declare class FriendFurniConfirmLockMessageComposer implements IMessageComposer<ConstructorParameters<typeof FriendFurniConfirmLockMessageComposer>> {
    private _data;
    constructor(itemId: number, confirmed: boolean);
    getMessageArray(): [itemId: number, confirmed: boolean];
    dispose(): void;
}
