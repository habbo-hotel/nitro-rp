import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class CheckUserNameResultMessageParser implements IMessageParser {
    private _resultCode;
    private _name;
    private _nameSuggestions;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get resultCode(): number;
    get name(): string;
    get nameSuggestions(): string[];
}
