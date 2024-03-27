import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { SellablePetPalettesParser } from '../../parser';
export declare class SellablePetPalettesMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): SellablePetPalettesParser;
}
