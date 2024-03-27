import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { RoomAdErrorMessageParser } from '../../parser';
export declare class RoomAdErrorEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): RoomAdErrorMessageParser;
}
