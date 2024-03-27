import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { NewConsoleMessageParser } from '../../parser';
export declare class NewConsoleMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): NewConsoleMessageParser;
}
