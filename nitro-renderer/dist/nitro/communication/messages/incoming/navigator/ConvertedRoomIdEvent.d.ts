import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { ConvertedRoomIdMessageParser } from '../../parser';
export declare class ConvertedRoomIdEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): ConvertedRoomIdMessageParser;
}
