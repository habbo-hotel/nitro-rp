import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { RoomPollDataParser } from '../../parser';
export declare class StartRoomPollEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): RoomPollDataParser;
}
