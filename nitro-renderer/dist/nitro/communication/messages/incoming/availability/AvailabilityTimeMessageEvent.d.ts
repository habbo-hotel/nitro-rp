import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { AvailabilityTimeMessageParser } from '../../parser';
export declare class AvailabilityTimeMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): AvailabilityTimeMessageParser;
}
