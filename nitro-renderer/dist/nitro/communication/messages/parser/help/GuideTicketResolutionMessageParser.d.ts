import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class GuideTicketResolutionMessageParser implements IMessageParser {
    static readonly RESOLUTION_GUARDIANS_TOOK_ACTION: number;
    static readonly RESOLUTION_FORWARDED_TO_MODERATORS: number;
    static readonly RESOLUTION_REPORTER_IS_ABUSIVE: number;
    private _resolution;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get resolution(): number;
}
