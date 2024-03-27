import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { PollErrorParser } from '../../parser';
export declare class PollErrorEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): PollErrorParser;
}
