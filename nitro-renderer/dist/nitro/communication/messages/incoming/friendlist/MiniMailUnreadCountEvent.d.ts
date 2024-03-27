import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { MiniMailUnreadCountParser } from '../../parser';
export declare class MiniMailUnreadCountEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): MiniMailUnreadCountParser;
}
