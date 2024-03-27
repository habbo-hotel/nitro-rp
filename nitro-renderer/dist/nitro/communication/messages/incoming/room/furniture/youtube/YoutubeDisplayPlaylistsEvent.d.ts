import { IMessageEvent } from '../../../../../../../api';
import { MessageEvent } from '../../../../../../../events';
import { YoutubeDisplayPlaylistsMessageParser } from '../../../../parser';
export declare class YoutubeDisplayPlaylistsEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): YoutubeDisplayPlaylistsMessageParser;
}
