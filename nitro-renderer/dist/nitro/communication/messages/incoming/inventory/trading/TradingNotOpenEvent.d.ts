import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { TradingNotOpenParser } from '../../../parser';
export declare class TradingNotOpenEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): TradingNotOpenParser;
}
