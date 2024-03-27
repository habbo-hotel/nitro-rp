import { IMessageEvent } from '../../../../../../../api';
import { MessageEvent } from '../../../../../../../events';
import { YoutubeDisplayVideoMessageParser } from '../../../../parser';
export declare class YoutubeDisplayVideoMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): YoutubeDisplayVideoMessageParser;
}
