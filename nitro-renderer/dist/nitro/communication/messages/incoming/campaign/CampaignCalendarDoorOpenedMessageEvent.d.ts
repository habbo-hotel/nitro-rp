import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { CampaignCalendarDoorOpenedMessageParser } from '../../parser';
export declare class CampaignCalendarDoorOpenedMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): CampaignCalendarDoorOpenedMessageParser;
}
