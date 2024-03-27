import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { MuteAllInRoomParser } from '../../parser';
export declare class MuteAllInRoomEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): MuteAllInRoomParser;
}
