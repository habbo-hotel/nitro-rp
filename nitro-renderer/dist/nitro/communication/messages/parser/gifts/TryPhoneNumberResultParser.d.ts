import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class TryPhoneNumberResultParser implements IMessageParser {
    private _resultCode;
    private _millisToAllowProcessReset;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get resultCode(): number;
    get millisToAllowProcessReset(): number;
}
