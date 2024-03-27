import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { YouArePlayingGameParser } from '../../../parser';
export declare class YouArePlayingGameEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): YouArePlayingGameParser;
}
