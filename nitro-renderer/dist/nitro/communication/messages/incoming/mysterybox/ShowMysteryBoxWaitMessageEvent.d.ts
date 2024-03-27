import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { ShowMysteryBoxWaitMessageParser } from '../../parser/mysterybox';
export declare class ShowMysteryBoxWaitMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): ShowMysteryBoxWaitMessageParser;
}
