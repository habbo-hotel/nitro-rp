import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class ApproveNameResultParser implements IMessageParser {
    private _result;
    private _validationInfo;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get result(): number;
    get validationInfo(): string;
}
