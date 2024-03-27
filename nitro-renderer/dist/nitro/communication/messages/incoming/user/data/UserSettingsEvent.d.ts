import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { UserSettingsParser } from '../../../parser';
export declare class UserSettingsEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): UserSettingsParser;
}
