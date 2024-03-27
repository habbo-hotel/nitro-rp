import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { RoomEntryTileMessageParser } from '../../../parser';
export declare class RoomEntryTileMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): RoomEntryTileMessageParser;
}
