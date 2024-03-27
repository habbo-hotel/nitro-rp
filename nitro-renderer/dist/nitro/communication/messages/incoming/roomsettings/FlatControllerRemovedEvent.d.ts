import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { FlatControllerRemovedParser } from '../../parser';
export declare class FlatControllerRemovedEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): FlatControllerRemovedParser;
}
