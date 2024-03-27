import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { IssuePickFailedMessageParser } from '../../parser';
export declare class IssuePickFailedMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): IssuePickFailedMessageParser;
}
