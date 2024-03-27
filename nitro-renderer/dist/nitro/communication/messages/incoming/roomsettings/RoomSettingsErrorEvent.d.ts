import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { RoomSettingsErrorParser } from '../../parser';
export declare class RoomSettingsErrorEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): RoomSettingsErrorParser;
}
