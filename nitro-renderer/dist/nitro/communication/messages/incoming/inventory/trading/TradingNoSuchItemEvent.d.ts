import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { TradingNoSuchItemParser } from '../../../parser';
export declare class TradingNoSuchItemEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): TradingNoSuchItemParser;
}
