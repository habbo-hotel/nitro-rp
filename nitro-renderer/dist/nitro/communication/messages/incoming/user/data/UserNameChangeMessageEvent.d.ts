import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { UserNameChangeMessageParser } from '../../../parser';
export declare class UserNameChangeMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): UserNameChangeMessageParser;
}
