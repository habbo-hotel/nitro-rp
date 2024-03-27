import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { ModeratorMessageParser } from '../../parser';
export declare class ModeratorMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): ModeratorMessageParser;
}
