import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { InterstitialMessageParser } from '../../parser';
export declare class InterstitialMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): InterstitialMessageParser;
}
