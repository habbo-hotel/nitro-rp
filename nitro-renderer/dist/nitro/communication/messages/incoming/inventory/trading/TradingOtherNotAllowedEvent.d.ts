import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { TradingOtherNotAllowedParser } from '../../../parser';
export declare class TradingOtherNotAllowedEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): TradingOtherNotAllowedParser;
}
