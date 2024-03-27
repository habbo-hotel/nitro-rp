import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { UserEventCatsMessageParser } from '../../parser';
export declare class UserEventCatsEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): UserEventCatsMessageParser;
}
