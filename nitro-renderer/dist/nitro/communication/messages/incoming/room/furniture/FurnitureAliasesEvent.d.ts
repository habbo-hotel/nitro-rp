import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { FurnitureAliasesParser } from '../../../parser';
export declare class FurnitureAliasesEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): FurnitureAliasesParser;
}
