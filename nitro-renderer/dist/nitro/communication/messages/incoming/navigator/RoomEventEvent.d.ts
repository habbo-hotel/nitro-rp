import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { RoomEventMessageParser } from '../../parser';
export declare class RoomEventEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): RoomEventMessageParser;
}
