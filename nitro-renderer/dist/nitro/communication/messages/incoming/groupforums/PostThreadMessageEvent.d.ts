import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { PostThreadMessageParser } from '../../parser';
export declare class PostThreadMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): PostThreadMessageParser;
}
