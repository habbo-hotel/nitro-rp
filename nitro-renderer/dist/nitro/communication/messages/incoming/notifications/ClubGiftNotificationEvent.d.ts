import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { ClubGiftNotificationParser } from '../../parser';
export declare class ClubGiftNotificationEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): ClubGiftNotificationParser;
}
