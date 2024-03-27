import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { ConcurrentUsersGoalProgressMessageParser } from '../../parser';
export declare class ConcurrentUsersGoalProgressMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): ConcurrentUsersGoalProgressMessageParser;
}
