import { IMessageEvent } from '../../../../../../../api';
import { MessageEvent } from '../../../../../../../events';
import { RoomUnitChatParser } from '../../../../parser';
export declare class RoomUnitChatShoutEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): RoomUnitChatParser;
}
