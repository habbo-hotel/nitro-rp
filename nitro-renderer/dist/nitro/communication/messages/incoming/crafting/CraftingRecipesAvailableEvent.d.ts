import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { CraftingRecipesAvailableMessageParser } from '../../parser';
export declare class CraftingRecipesAvailableEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): CraftingRecipesAvailableMessageParser;
}
