import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { LoveLockFurniStartParser } from '../../../parser';
export declare class LoveLockFurniStartEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): LoveLockFurniStartParser;
}
