import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { YouAreSpectatorMessageParser } from '../../../parser';
export declare class YouAreSpectatorMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): YouAreSpectatorMessageParser;
}
