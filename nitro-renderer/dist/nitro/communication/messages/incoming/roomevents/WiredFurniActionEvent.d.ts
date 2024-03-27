import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { WiredFurniActionParser } from '../../parser';
export declare class WiredFurniActionEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): WiredFurniActionParser;
}
