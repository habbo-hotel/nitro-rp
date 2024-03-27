import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { NewFriendRequestParser } from '../../parser';
export declare class NewFriendRequestEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): NewFriendRequestParser;
}
