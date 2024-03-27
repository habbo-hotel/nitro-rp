import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { TargetedOfferParser } from '../../parser';
export declare class TargetedOfferEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): TargetedOfferParser;
}
