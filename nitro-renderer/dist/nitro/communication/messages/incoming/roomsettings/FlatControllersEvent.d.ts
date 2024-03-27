import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { FlatControllersParser } from '../../parser';
export declare class FlatControllersEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): FlatControllersParser;
}
