import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class AccountSafetyLockStatusChangeParser implements IMessageParser {
    static SAFETY_LOCK_STATUS_LOCKED: number;
    static SAFETY_LOCK_STATUS_UNLOCKED: number;
    private _status;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get status(): number;
}
