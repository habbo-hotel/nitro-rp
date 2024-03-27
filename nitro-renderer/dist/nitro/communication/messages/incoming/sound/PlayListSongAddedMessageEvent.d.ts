import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { PlayListSongAddedMessageParser } from '../../parser';
export declare class PlayListSongAddedMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): PlayListSongAddedMessageParser;
}
