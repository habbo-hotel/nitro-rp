import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { SanctionStatusMessageParser } from '../../parser';
export declare class SanctionStatusEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): SanctionStatusMessageParser;
}
