import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { IssueDeletedMessageParser } from '../../parser';
export declare class IssueDeletedMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): IssueDeletedMessageParser;
}
