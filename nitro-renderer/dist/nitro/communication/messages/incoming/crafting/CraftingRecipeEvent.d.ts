import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { CraftingRecipeMessageParser } from '../../parser';
export declare class CraftingRecipeEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): CraftingRecipeMessageParser;
}
