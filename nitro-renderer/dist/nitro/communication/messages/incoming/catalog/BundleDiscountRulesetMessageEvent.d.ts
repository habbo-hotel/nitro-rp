import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { BundleDiscountRulesetMessageParser } from '../../parser';
export declare class BundleDiscountRulesetMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): BundleDiscountRulesetMessageParser;
}
