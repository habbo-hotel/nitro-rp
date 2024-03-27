import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { RoomSettingsSavedParser } from '../../parser';
export declare class RoomSettingsSavedEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): RoomSettingsSavedParser;
}
