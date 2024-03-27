import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class IgnoreResultParser implements IMessageParser {
    private _result;
    private _name;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get result(): number;
    get name(): string;
}
