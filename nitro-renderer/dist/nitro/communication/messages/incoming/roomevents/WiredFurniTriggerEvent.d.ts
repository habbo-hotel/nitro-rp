import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { WiredFurniTriggerParser } from '../../parser';
export declare class WiredFurniTriggerEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): WiredFurniTriggerParser;
}
