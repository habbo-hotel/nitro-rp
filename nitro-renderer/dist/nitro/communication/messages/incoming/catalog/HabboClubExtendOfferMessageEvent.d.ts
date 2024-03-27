import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { HabboClubExtendOfferMessageParser } from '../../parser';
export declare class HabboClubExtendOfferMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): HabboClubExtendOfferMessageParser;
}
