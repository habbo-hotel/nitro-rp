import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { CurrentTimingCodeMessageParser } from '../../parser';
export declare class CurrentTimingCodeMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): CurrentTimingCodeMessageParser;
}
