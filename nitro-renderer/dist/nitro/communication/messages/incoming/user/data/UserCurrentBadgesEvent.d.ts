import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { UserCurrentBadgesParser } from '../../../parser';
export declare class UserCurrentBadgesEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): UserCurrentBadgesParser;
}
