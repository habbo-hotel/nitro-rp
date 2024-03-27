import { IMessageEvent } from '../../../../../../../api';
import { MessageEvent } from '../../../../../../../events';
import { UserCreditsParser } from '../../../../parser';
export declare class UserCreditsEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): UserCreditsParser;
}
