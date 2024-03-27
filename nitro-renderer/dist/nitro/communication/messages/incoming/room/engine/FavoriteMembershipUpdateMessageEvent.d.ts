import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { FavoriteMembershipUpdateMessageParser } from '../../../parser';
export declare class FavoriteMembershipUpdateMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): FavoriteMembershipUpdateMessageParser;
}
