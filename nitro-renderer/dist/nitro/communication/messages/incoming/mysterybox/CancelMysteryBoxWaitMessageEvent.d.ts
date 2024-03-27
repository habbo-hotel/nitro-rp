import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { CancelMysteryBoxWaitMessageParser } from '../../parser/mysterybox';
export declare class CancelMysteryBoxWaitMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): CancelMysteryBoxWaitMessageParser;
}
