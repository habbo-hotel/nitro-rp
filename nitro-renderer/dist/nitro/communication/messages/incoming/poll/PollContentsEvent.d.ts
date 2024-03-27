import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { PollContentsParser } from '../../parser';
export declare class PollContentsEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): PollContentsParser;
}
