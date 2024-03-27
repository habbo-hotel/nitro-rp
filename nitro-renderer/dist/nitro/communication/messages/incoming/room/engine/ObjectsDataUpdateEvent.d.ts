import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { ObjectsDataUpdateParser } from '../../../parser';
export declare class ObjectsDataUpdateEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): ObjectsDataUpdateParser;
}
