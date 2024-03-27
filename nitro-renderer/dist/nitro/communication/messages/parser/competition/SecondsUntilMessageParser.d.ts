import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class SecondsUntilMessageParser implements IMessageParser {
    private _timeStr;
    private _secondsUntil;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get timeStr(): string;
    get secondsUntil(): number;
}
