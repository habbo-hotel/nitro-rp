import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { WelcomeGiftChangeEmailResultParser } from '../../parser';
export declare class WelcomeGiftChangeEmailResultEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): WelcomeGiftChangeEmailResultParser;
}
