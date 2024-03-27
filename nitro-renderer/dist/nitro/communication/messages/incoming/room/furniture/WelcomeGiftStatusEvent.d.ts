import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { WelcomeGiftStatusParser } from '../../../parser';
export declare class WelcomeGiftStatusEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): WelcomeGiftStatusParser;
}
