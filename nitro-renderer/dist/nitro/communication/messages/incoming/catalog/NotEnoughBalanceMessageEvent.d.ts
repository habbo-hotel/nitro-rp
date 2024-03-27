import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { NotEnoughBalanceMessageParser } from '../../parser';
export declare class NotEnoughBalanceMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): NotEnoughBalanceMessageParser;
}
