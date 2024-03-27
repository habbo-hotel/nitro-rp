import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { CraftingResultMessageParser } from '../../parser';
export declare class CraftingResultEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): CraftingResultMessageParser;
}
