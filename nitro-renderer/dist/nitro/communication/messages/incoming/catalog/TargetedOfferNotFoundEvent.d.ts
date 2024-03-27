import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { TargetedOfferNotFoundParser } from '../../parser';
export declare class TargetedOfferNotFoundEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): TargetedOfferNotFoundParser;
}
