import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { CampaignCalendarDataMessageParser } from '../../parser';
export declare class CampaignCalendarDataMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): CampaignCalendarDataMessageParser;
}
