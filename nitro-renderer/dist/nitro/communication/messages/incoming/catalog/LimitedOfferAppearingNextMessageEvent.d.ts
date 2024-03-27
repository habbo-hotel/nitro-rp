import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { LimitedOfferAppearingNextMessageParser } from '../../parser';
export declare class LimitedOfferAppearingNextMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): LimitedOfferAppearingNextMessageParser;
}
