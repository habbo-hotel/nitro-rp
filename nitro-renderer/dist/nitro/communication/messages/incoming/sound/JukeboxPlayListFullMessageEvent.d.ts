import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { JukeboxPlayListFullMessageParser } from '../../parser';
export declare class JukeboxPlayListFullMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): JukeboxPlayListFullMessageParser;
}
