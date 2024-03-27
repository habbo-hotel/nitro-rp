import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { FurnitureStackHeightParser } from '../../../parser';
export declare class FurnitureStackHeightEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): FurnitureStackHeightParser;
}
