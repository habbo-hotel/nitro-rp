import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { IgnoreResultParser } from '../../parser';
export declare class IgnoreResultEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): IgnoreResultParser;
}
