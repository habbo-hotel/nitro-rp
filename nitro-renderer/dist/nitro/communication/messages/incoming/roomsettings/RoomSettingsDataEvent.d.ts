import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { RoomSettingsDataParser } from '../../parser';
export declare class RoomSettingsDataEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): RoomSettingsDataParser;
}
