import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { WiredFurniConditionParser } from '../../parser';
export declare class WiredFurniConditionEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): WiredFurniConditionParser;
}
