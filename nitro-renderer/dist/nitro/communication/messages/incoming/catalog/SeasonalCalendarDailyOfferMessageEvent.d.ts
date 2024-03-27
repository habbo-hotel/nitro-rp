import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { SeasonalCalendarDailyOfferMessageParser } from '../../parser';
export declare class SeasonalCalendarDailyOfferMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): SeasonalCalendarDailyOfferMessageParser;
}
