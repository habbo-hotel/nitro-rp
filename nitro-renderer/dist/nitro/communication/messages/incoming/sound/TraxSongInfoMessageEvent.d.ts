import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { TraxSongInfoMessageParser } from '../../parser';
export declare class TraxSongInfoMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): TraxSongInfoMessageParser;
}
