import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { TradingOpenParser } from '../../../parser';
export declare class TradingOpenEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    get userID(): number;
    get userCanTrade(): boolean;
    get otherUserID(): number;
    get otherUserCanTrade(): boolean;
    getParser(): TradingOpenParser;
}
