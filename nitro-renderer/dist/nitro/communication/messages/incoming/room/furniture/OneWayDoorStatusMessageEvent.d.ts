import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { OneWayDoorStatusMessageParser } from '../../../parser';
export declare class OneWayDoorStatusMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): OneWayDoorStatusMessageParser;
}
