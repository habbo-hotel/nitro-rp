import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { NowPlayingMessageParser } from '../../parser';
export declare class NowPlayingMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): NowPlayingMessageParser;
}
