import { IMessageComposer } from '../../../../../api';
export declare class RedeemVoucherMessageComposer implements IMessageComposer<ConstructorParameters<typeof RedeemVoucherMessageComposer>> {
    private _data;
    constructor(voucherCode: string);
    getMessageArray(): [voucherCode: string];
    dispose(): void;
}
