import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { TradingConfirmationParser } from '../../../parser';
export declare class TradingConfirmationEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): TradingConfirmationParser;
}
