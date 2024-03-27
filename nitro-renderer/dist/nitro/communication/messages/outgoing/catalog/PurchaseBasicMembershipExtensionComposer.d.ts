import { IMessageComposer } from '../../../../../api';
export declare class PurchaseBasicMembershipExtensionComposer implements IMessageComposer<ConstructorParameters<typeof PurchaseBasicMembershipExtensionComposer>> {
    private _data;
    constructor(k: number);
    getMessageArray(): [k: number];
    dispose(): void;
}
