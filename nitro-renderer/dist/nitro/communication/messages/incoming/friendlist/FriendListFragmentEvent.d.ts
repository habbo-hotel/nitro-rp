import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { FriendListFragmentParser } from '../../parser';
export declare class FriendListFragmentEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): FriendListFragmentParser;
}
