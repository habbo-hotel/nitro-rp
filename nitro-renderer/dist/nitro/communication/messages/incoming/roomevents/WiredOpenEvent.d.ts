import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { WiredOpenParser } from '../../parser';
export declare class WiredOpenEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): WiredOpenParser;
}
