import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { LoveLockFurniFriendConfirmedParser } from '../../../parser';
export declare class LoveLockFurniFriendConfirmedEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): LoveLockFurniFriendConfirmedParser;
}
