import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class GuideSessionErrorMessageParser implements IMessageParser {
    static readonly ERROR_GENERIC: number;
    static readonly ERROR_GUIDES_REJECT: number;
    static readonly ERROR_NOT_ENOUGH_GUIDES: number;
    static readonly ERROR_NOT_ENOUGH_VOTES: number;
    static readonly ERROR_NO_CHATLOG_FOUND: number;
    private _errorCode;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get errorCode(): number;
}
