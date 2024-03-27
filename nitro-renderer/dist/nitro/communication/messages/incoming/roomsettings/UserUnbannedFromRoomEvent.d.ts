import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { UserUnbannedFromRoomParser } from '../../parser';
export declare class UserUnbannedFromRoomEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): UserUnbannedFromRoomParser;
}
