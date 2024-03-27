import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { UserSongDisksInventoryMessageParser } from '../../parser';
export declare class UserSongDisksInventoryMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): UserSongDisksInventoryMessageParser;
}
