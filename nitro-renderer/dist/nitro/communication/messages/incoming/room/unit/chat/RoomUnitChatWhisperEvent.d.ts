import { IMessageEvent } from '../../../../../../../api';
import { MessageEvent } from '../../../../../../../events';
import { RoomUnitChatParser } from '../../../../parser';
export declare class RoomUnitChatWhisperEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): RoomUnitChatParser;
}
