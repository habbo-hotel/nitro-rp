import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { UserInfoParser } from '../../../parser';
export declare class UserInfoEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): UserInfoParser;
}
