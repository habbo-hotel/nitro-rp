import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { UserWardrobePageParser } from '../../../parser';
export declare class UserWardrobePageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): UserWardrobePageParser;
}
