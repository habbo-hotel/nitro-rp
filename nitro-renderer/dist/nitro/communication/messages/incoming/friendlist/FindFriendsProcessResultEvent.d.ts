import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { FindFriendsProcessResultParser } from '../../parser';
export declare class FindFriendsProcessResultEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): FindFriendsProcessResultParser;
}
