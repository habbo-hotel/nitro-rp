import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { PostMessageMessageParser } from '../../parser';
export declare class PostMessageMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): PostMessageMessageParser;
}
