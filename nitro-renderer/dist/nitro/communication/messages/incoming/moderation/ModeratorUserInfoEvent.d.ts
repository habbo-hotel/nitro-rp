import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { ModeratorUserInfoMessageParser } from '../../parser';
export declare class ModeratorUserInfoEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): ModeratorUserInfoMessageParser;
}
