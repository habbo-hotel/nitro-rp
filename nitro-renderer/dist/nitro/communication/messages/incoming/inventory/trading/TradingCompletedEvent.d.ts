import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { TradingCompletedParser } from '../../../parser';
export declare class TradingCompletedEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): TradingCompletedParser;
}
