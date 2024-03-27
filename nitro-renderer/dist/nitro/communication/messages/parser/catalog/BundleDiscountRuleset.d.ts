import { IMessageDataWrapper } from '../../../../../api';
export declare class BundleDiscountRuleset {
    private _maxPurchaseSize;
    private _bundleSize;
    private _bundleDiscountSize;
    private _bonusThreshold;
    private _additionalBonusDiscountThresholdQuantities;
    constructor(wrapper: IMessageDataWrapper);
    get maxPurchaseSize(): number;
    get bundleSize(): number;
    get bundleDiscountSize(): number;
    get bonusThreshold(): number;
    get additionalBonusDiscountThresholdQuantities(): number[];
}
