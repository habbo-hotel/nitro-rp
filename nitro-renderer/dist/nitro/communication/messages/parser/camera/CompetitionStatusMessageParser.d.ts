import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class CompetitionStatusMessageParser implements IMessageParser {
    private _ok;
    private _errorReason;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get ok(): boolean;
    get errorReason(): string;
}
