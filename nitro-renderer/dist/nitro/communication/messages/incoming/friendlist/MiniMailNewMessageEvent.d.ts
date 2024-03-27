import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { MiniMailNewMessageParser } from '../../parser';
export declare class MiniMailNewMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): MiniMailNewMessageParser;
}
