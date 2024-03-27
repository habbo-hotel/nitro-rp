import { IMessageComposer } from '../../../../../api';
export declare class PurchaseVipMembershipExtensionComposer implements IMessageComposer<ConstructorParameters<typeof PurchaseVipMembershipExtensionComposer>> {
    private _data;
    constructor(k: number);
    getMessageArray(): [k: number];
    dispose(): void;
}
