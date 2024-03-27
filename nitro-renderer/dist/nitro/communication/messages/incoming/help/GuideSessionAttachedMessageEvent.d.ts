import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { GuideSessionAttachedMessageParser } from '../../parser';
export declare class GuideSessionAttachedMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): GuideSessionAttachedMessageParser;
}
