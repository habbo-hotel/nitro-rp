import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { DirectSMSClubBuyAvailableMessageParser } from '../../parser';
export declare class DirectSMSClubBuyAvailableMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): DirectSMSClubBuyAvailableMessageParser;
}
