import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { UserProfileParser } from '../../../parser';
export declare class UserProfileEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): UserProfileParser;
}
