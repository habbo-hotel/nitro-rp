import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { GroupSettingsParser } from '../../parser';
export declare class GroupSettingsEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): GroupSettingsParser;
}
