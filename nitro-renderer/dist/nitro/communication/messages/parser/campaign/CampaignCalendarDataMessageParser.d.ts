import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { CampaignCalendarData } from './CampaignCalendarData';
export declare class CampaignCalendarDataMessageParser implements IMessageParser {
    private _calendarData;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get calendarData(): CampaignCalendarData;
}
