import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { FriendListUpdateParser } from '../../parser';
export declare class FriendListUpdateEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): FriendListUpdateParser;
}
