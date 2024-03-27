import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { CraftableProductsMessageParser } from '../../parser';
export declare class CraftableProductsEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): CraftableProductsMessageParser;
}
