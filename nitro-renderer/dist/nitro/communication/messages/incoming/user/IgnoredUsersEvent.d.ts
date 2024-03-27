import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { IgnoredUsersParser } from '../../parser';
export declare class IgnoredUsersEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): IgnoredUsersParser;
}
