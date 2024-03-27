import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { GuideSessionDetachedMessageParser } from '../../parser';
export declare class GuideSessionDetachedMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): GuideSessionDetachedMessageParser;
}
