import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class GuideTicketCreationResultMessageParser implements IMessageParser {
    static readonly CREATION_RESULT_OK: number;
    static readonly CREATION_RESULT_UNABLE_TO_REPORT: number;
    static readonly CREATION_RESULT_NO_CHATLOG_FOUND: number;
    static readonly CREATION_RESULT_BULLY_ALREADY_REPORTED: number;
    private _result;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get result(): number;
}
