import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { RoomPollResultParser } from '../../parser';
export declare class RoomPollResultEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): RoomPollResultParser;
}
