import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { RoomSettingsSaveErrorParser } from '../../parser';
export declare class RoomSettingsSaveErrorEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): RoomSettingsSaveErrorParser;
}
