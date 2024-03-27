import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class IsUserPartOfCompetitionMessageParser implements IMessageParser {
    private _isPartOf;
    private _targetId;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get isPartOf(): boolean;
    get targetId(): number;
}
