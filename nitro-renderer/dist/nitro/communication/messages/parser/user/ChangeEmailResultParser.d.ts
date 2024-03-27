import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class ChangeEmailResultParser implements IMessageParser {
    static readonly EMAIL_STATUS_OK: number;
    private _result;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get result(): number;
}
