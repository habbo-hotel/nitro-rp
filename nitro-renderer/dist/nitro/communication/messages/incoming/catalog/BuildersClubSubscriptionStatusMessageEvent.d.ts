import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { BuildersClubSubscriptionStatusMessageParser } from '../../parser';
export declare class BuildersClubSubscriptionStatusMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): BuildersClubSubscriptionStatusMessageParser;
}
