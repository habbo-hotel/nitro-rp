import { IMessageEvent } from '../../../../../../../api';
import { MessageEvent } from '../../../../../../../events';
import { YoutubeControlVideoMessageParser } from '../../../../parser';
export declare class YoutubeControlVideoMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): YoutubeControlVideoMessageParser;
}
