import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { JukeboxSongDisksMessageParser } from '../../parser';
export declare class JukeboxSongDisksMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): JukeboxSongDisksMessageParser;
}
