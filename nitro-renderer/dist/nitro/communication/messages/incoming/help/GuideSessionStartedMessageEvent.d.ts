import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { GuideSessionStartedMessageParser } from '../../parser';
export declare class GuideSessionStartedMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): GuideSessionStartedMessageParser;
}
