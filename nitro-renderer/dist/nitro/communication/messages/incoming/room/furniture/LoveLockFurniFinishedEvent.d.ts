import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { LoveLockFurniFinishedParser } from '../../../parser';
export declare class LoveLockFurniFinishedEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): LoveLockFurniFinishedParser;
}
