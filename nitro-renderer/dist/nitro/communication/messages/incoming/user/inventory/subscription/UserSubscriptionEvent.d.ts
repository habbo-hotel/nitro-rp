import { IMessageEvent } from '../../../../../../../api';
import { MessageEvent } from '../../../../../../../events';
import { UserSubscriptionParser } from '../../../../parser';
export declare class UserSubscriptionEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): UserSubscriptionParser;
}
