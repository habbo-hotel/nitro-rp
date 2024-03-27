import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { ModeratorActionResultMessageParser } from '../../parser';
export declare class ModeratorActionResultMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): ModeratorActionResultMessageParser;
}
