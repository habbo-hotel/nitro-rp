import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { BannedUsersFromRoomParser } from '../../parser';
export declare class BannedUsersFromRoomEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): BannedUsersFromRoomParser;
}
