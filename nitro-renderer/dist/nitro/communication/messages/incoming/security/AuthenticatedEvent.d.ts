import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { AuthenticatedParser } from '../../parser';
export declare class AuthenticatedEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): AuthenticatedParser;
}
