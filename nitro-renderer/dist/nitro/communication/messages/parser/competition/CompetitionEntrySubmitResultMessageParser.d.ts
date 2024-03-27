import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class CompetitionEntrySubmitResultMessageParser implements IMessageParser {
    static SUBMITTED: number;
    static ASK_FOR_SUBMIT: number;
    static ASK_FOR_CONFIRM: number;
    static PREREQUISITES_NOT_MET: number;
    static ROOM_DOOR_NOT_OPEN: number;
    static ROOM_TOO_OLD: number;
    static ASK_FOR_ACCEPT_RULES: number;
    private _goalId;
    private _goalCode;
    private _result;
    private _requiredFurnis;
    private _missingFurnis;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get goalId(): number;
    get goalCode(): string;
    get result(): number;
    get requiredFurnis(): string[];
    isMissing(name: string): boolean;
}
