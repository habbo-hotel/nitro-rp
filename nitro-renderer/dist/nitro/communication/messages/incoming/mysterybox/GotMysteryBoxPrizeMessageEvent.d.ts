import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { GotMysteryBoxPrizeMessageParser } from '../../parser/mysterybox';
export declare class GotMysteryBoxPrizeMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): GotMysteryBoxPrizeMessageParser;
}
