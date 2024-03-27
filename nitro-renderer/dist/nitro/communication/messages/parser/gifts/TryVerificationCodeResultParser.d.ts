import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class TryVerificationCodeResultParser implements IMessageParser {
    private _resultCode;
    private _millisecondsToAllowProcessReset;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get resultCode(): number;
    get millisToAllowProcessReset(): number;
}
