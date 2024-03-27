import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { RoomInviteErrorParser } from '../../parser';
export declare class RoomInviteErrorEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): RoomInviteErrorParser;
}
