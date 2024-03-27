import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { ModeratorRoomInfoMessageParser } from '../../parser';
export declare class ModeratorRoomInfoEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): ModeratorRoomInfoMessageParser;
}
