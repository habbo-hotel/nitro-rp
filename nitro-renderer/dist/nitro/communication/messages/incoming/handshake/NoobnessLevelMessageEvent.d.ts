import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { NoobnessLevelMessageParser } from '../../parser';
export declare class NoobnessLevelMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): NoobnessLevelMessageParser;
}
