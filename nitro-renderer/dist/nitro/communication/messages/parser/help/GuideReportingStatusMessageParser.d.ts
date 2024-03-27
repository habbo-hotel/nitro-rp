import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { PendingGuideTicketData } from './PendingGuideTicketData';
export declare class GuideReportingStatusMessageParser implements IMessageParser {
    static readonly GUIDE_REPORTING_STATUS_OK: number;
    static readonly GUIDE_REPORTING_STATUS_PENDING_TICKET: number;
    static readonly GUIDE_REPORTING_STATUS_ABUSIVE: number;
    static readonly GUIDE_REPORTING_STATUS_REPORTING_TOO_QUICKLY: number;
    private _statusCode;
    private _pendingTicket;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get statusCode(): number;
    get pendingTicket(): PendingGuideTicketData;
}
