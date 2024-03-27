import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { MysteryBoxKeysParser } from '../../parser';
export declare class MysteryBoxKeysEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): MysteryBoxKeysParser;
}
