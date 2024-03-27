import { IMessageEvent } from '../../../../../../../api';
import { MessageEvent } from '../../../../../../../events';
import { UserCurrencyParser } from '../../../../parser';
export declare class UserCurrencyEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): UserCurrencyParser;
}
