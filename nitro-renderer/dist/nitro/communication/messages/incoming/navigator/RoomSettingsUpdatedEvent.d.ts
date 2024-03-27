import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { RoomSettingsUpdatedParser } from '../../parser';
export declare class RoomSettingsUpdatedEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): RoomSettingsUpdatedParser;
}
