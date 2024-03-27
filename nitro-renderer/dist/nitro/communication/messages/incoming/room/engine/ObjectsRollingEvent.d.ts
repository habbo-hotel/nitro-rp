import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { ObjectsRollingParser } from '../../../parser';
export declare class ObjectsRollingEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): ObjectsRollingParser;
}
