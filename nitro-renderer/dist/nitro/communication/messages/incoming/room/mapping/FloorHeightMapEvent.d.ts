import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { FloorHeightMapMessageParser } from '../../../parser';
export declare class FloorHeightMapEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): FloorHeightMapMessageParser;
}
