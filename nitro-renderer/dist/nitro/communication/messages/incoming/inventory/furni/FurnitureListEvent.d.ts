import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { FurnitureListParser } from '../../../parser';
export declare class FurnitureListEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): FurnitureListParser;
}
