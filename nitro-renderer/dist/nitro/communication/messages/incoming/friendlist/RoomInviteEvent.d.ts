import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { RoomInviteParser } from '../../parser';
export declare class RoomInviteEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): RoomInviteParser;
}
