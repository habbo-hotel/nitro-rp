import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { IdentityAccountsParser } from '../../parser';
export declare class IdentityAccountsEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): IdentityAccountsParser;
}
