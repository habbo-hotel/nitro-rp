import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { AccountSafetyLockStatusChangeParser } from '../../parser/user/AccountSafetyLockStatusChangeParser';
export declare class AccountSafetyLockStatusChangeMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): AccountSafetyLockStatusChangeParser;
}
