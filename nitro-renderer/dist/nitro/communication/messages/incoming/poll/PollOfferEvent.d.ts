import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { PollOfferParser } from '../../parser';
export declare class PollOfferEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): PollOfferParser;
}
