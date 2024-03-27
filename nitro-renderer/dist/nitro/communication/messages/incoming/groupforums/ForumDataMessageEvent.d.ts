import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { ForumDataMessageParser } from '../../parser';
export declare class ForumDataMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): ForumDataMessageParser;
}
