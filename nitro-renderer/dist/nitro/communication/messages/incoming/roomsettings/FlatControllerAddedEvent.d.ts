import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { FlatControllerAddedParser } from '../../parser';
export declare class FlatControllerAddedEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): FlatControllerAddedParser;
}
