import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class WiredValidationErrorParser implements IMessageParser {
    private _info;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get info(): string;
}
