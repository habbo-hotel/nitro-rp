import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { RentableSpaceRentFailedMessageParser } from '../../../parser';
export declare class RentableSpaceRentFailedMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): RentableSpaceRentFailedMessageParser;
}
