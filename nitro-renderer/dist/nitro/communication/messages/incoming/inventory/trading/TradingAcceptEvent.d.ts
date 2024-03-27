import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { TradingAcceptParser } from '../../../parser';
export declare class TradingAcceptEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    get userID(): number;
    get userAccepts(): boolean;
    getParser(): TradingAcceptParser;
}
