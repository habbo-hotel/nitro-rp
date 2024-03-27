import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class RoomPollResultParser implements IMessageParser {
    private _question;
    private _choices;
    private _SafeStr_7651;
    private _SafeStr_7654;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get question(): string;
    get choices(): string[];
    get SafeStr_7651(): any[];
    get SafeStr_7654(): number;
}
