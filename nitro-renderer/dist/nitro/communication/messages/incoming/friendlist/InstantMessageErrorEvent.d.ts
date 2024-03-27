import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { InstantMessageErrorParser } from '../../parser';
export declare class InstantMessageErrorEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): InstantMessageErrorParser;
}
