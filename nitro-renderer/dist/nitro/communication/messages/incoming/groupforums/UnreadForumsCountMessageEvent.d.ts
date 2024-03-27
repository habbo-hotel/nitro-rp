import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { UnreadForumsCountMessageParser } from '../../parser';
export declare class UnreadForumsCountMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): UnreadForumsCountMessageParser;
}
