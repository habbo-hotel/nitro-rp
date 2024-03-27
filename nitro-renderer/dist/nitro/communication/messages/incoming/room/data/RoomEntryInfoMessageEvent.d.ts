import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { RoomEntryInfoMessageParser } from '../../../parser';
export declare class RoomEntryInfoMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): RoomEntryInfoMessageParser;
}
