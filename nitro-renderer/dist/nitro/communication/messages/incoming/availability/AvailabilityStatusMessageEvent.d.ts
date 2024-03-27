import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { AvailabilityStatusMessageParser } from '../../parser';
export declare class AvailabilityStatusMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): AvailabilityStatusMessageParser;
}
