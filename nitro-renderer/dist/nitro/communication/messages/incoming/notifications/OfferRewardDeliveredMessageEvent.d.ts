import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { OfferRewardDeliveredMessageParser } from '../../parser';
export declare class OfferRewardDeliveredMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): OfferRewardDeliveredMessageParser;
}
