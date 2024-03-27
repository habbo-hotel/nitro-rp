import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { ModeratorToolPreferencesMessageParser } from '../../parser';
export declare class ModeratorToolPreferencesEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): ModeratorToolPreferencesMessageParser;
}
