import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { HabboClubOffersMessageParser } from '../../parser';
export declare class HabboClubOffersMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): HabboClubOffersMessageParser;
}
