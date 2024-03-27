import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { RentableSpaceRentOkMessageParser } from '../../../parser';
export declare class RentableSpaceRentOkMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): RentableSpaceRentOkMessageParser;
}
