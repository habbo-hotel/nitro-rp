import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { RentableSpaceStatusMessageParser } from '../../../parser';
export declare class RentableSpaceStatusMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): RentableSpaceStatusMessageParser;
}
