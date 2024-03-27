import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { UserFlatCatsMessageParser } from '../../parser';
export declare class UserFlatCatsEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): UserFlatCatsMessageParser;
}
