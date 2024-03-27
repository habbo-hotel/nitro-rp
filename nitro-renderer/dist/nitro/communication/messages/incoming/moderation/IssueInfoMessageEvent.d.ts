import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { IssueInfoMessageParser } from '../../parser';
export declare class IssueInfoMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): IssueInfoMessageParser;
}
