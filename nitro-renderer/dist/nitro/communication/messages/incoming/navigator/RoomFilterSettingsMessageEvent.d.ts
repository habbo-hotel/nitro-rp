import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { RoomFilterSettingsMessageParser } from '../../parser';
export declare class RoomFilterSettingsMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): RoomFilterSettingsMessageParser;
}
