import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { InfoFeedEnableMessageParser } from '../../parser';
export declare class InfoFeedEnableMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): InfoFeedEnableMessageParser;
}
