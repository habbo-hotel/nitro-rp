import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { BundleDiscountRuleset } from './BundleDiscountRuleset';
export declare class BundleDiscountRulesetMessageParser implements IMessageParser {
    private _bundleDiscountRuleset;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get bundleDiscountRuleset(): BundleDiscountRuleset;
}
