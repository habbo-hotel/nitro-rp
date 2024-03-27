import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { TradingCloseParser } from '../../../parser';
export declare class TradingCloseEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    get userID(): number;
    getParser(): TradingCloseParser;
}
