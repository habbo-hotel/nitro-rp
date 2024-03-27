import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { GuideSessionInvitedToGuideRoomMessageParser } from '../../parser';
export declare class GuideSessionInvitedToGuideRoomMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): GuideSessionInvitedToGuideRoomMessageParser;
}
