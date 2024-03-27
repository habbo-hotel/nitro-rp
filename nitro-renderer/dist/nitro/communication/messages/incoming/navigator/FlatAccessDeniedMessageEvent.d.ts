import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { FlatAccessDeniedMessageParser } from '../../parser';
export declare class FlatAccessDeniedMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): FlatAccessDeniedMessageParser;
}
