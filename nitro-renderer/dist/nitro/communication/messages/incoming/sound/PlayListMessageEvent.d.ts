import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { PlayListMessageParser } from '../../parser';
export declare class PlayListMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): PlayListMessageParser;
}
