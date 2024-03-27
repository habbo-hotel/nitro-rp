import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { DoorbellMessageParser } from '../../parser';
export declare class DoorbellMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): DoorbellMessageParser;
    get userName(): string;
}
