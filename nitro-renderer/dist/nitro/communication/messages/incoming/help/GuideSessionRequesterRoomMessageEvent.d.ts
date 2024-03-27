import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { GuideSessionRequesterRoomMessageParser } from '../../parser';
export declare class GuideSessionRequesterRoomMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): GuideSessionRequesterRoomMessageParser;
}
